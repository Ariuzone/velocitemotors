/* ============================================================
   Simulateur de financement — crédit classique & LOA
   ============================================================ */
"use strict";

const SIM = { mode: "credit", vehicle: "", prix: 0, apport: 0.15, duree: 60, km: 15000 };

function simVehicles() {
  const list = [];
  VM.modeles.forEach((m) => m.motorisations.forEach((mo, i) => {
    list.push({ key: "n-" + m.slug + "-" + i, label: "Neuf · " + vmMarque(m.marque).nom + " " + m.nom + " " + mo.nom, prix: mo.prixBase });
  }));
  VM.occasions.forEach((o) => {
    list.push({ key: "o-" + o.id, label: "Occasion · " + vmMarque(o.marque).nom + " " + o.modele + " " + o.version + " (" + o.annee + ")", prix: o.prix });
  });
  return list;
}

function simTaux() {
  return SIM.mode === "credit" ? VM.financement.tauxNominal : VM.financement.tauxLoa;
}

function simDurees() {
  return SIM.mode === "credit" ? VM.financement.dureesCredit : VM.financement.dureesLoa;
}

function simCompute() {
  const C = SIM.prix;
  const apport = Math.round(C * SIM.apport);
  const n = SIM.duree;
  const i = simTaux() / 100 / 12;
  if (SIM.mode === "credit") {
    const mens = (C - apport) * i / (1 - Math.pow(1 + i, -n));
    return { mens, apport, total: mens * n + apport, frais: mens * n + apport - C, vr: 0, fin: "Le véhicule vous appartient à la dernière échéance." };
  }
  const vrIdx = VM.financement.dureesLoa.indexOf(n);
  const vrPct = VM.financement.valeurResiduellePct[vrIdx] || 0.4;
  const vr = Math.round(C * vrPct);
  const c = C - apport - vr * Math.pow(1 + i, -n);
  const mens = (c * i) / (1 - Math.pow(1 + i, -n));
  const sr = Math.round(mens * 0.012); /* service d'entretien inclus */
  return { mens: mens + sr, apport, total: (mens + sr) * n + apport + vr, frais: (mens + sr) * n + apport + vr - C, vr, fin: "Options : restituer le véhicule, le financer, ou le revendre à Vélocité (VR garantie)." };
}

function simRender() {
  const r = simCompute();
  document.getElementById("sim-mens").textContent = vmeur(Math.round(r.mens));
  document.getElementById("sim-detail").innerHTML = `
    <div class="summary-row"><span>Prix du véhicule</span><span class="val">${vmeur(SIM.prix)}</span></div>
    <div class="summary-row"><span>Apport</span><span class="val">${vmeur(r.apport)}</span></div>
    ${SIM.mode === "loa" ? `<div class="summary-row"><span>Kilométrage annuel</span><span class="val">${vmnb(SIM.km)} km</span></div>
    <div class="summary-row"><span>Valeur de rachat (VR)</span><span class="val">${vmeur(r.vr)}</span></div>` : ""}
    <div class="summary-row"><span>Durée</span><span class="val">${SIM.duree} mois</span></div>
    <div class="summary-row"><span>TAEG fixe</span><span class="val">${(simTaux()).toLocaleString("fr-FR")} %</span></div>
    <div class="summary-row total"><span>Coût total du financement</span><span class="val">${vmeur(Math.round(r.frais))}</span></div>
    <p class="form-note" style="margin-top:10px">${r.fin}</p>`;
}

function simSetRange(el, out, val, fmt) {
  out.textContent = fmt(val);
  const p = ((val - el.min) / (el.max - el.min)) * 100;
  el.style.setProperty("--fill", p + "%");
}

function simInit() {
  const $ = (id) => document.getElementById(id);
  const sel = $("sim-vehicle");
  sel.innerHTML = simVehicles().map((v) => `<option value="${v.key}" data-prix="${v.prix}">${v.label} — ${vmeur(v.prix)}</option>`).join("");

  /* modes */
  document.querySelectorAll("#sim-modes .seg").forEach((b) => b.addEventListener("click", () => {
    document.querySelectorAll("#sim-modes .seg").forEach((x) => { x.classList.remove("selected"); x.setAttribute("aria-pressed", "false"); });
    b.classList.add("selected"); b.setAttribute("aria-pressed", "true");
    SIM.mode = b.dataset.mode;
    SIM.duree = SIM.mode === "credit" ? 60 : 48;
    simBuildDurees();
    simRender();
  }));

  function simBuildDurees() {
    const wrap = $("sim-durees");
    wrap.innerHTML = simDurees().map((d) => `<button type="button" class="seg ${d === SIM.duree ? "selected" : ""}" data-d="${d}" aria-pressed="${d === SIM.duree}">${d} mois</button>`).join("");
    wrap.querySelectorAll(".seg").forEach((b) => b.addEventListener("click", () => {
      wrap.querySelectorAll(".seg").forEach((x) => { x.classList.remove("selected"); x.setAttribute("aria-pressed", "false"); });
      b.classList.add("selected"); b.setAttribute("aria-pressed", "true");
      SIM.duree = +b.dataset.d;
      simRender();
    }));
  }

  sel.addEventListener("change", () => {
    SIM.prix = +sel.selectedOptions[0].dataset.prix;
    simRender();
  });
  SIM.prix = +sel.selectedOptions[0].dataset.prix;

  const apportEl = $("sim-apport"), kmEl = $("sim-km");
  const kmWrap = document.getElementById("sim-km-wrap");
  apportEl.addEventListener("input", () => {
    SIM.apport = apportEl.value / 100;
    simSetRange(apportEl, document.getElementById("sim-apport-out"), +apportEl.value, (v) => v + " % · " + vmeur(Math.round(SIM.prix * v / 100)));
    simRender();
  });
  kmEl.addEventListener("input", () => {
    SIM.km = +kmEl.value;
    simSetRange(kmEl, document.getElementById("sim-km-out"), SIM.km, (v) => vmnb(v) + " km/an");
    simRender();
  });

  /* afficher/masquer LOA selon mode */
  document.querySelectorAll("#sim-modes .seg").forEach((b) => {
    b.addEventListener("click", () => { kmWrap.style.display = SIM.mode === "loa" ? "" : "none"; });
  });

  simBuildDurees();
  simSetRange(apportEl, $("sim-apport-out"), +apportEl.value, (v) => v + " %");
  simSetRange(kmEl, $("sim-km-out"), +kmEl.value, (v) => vmnb(v) + " km/an");
  simRender();

  /* demande */
  const form = $("sim-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!vmValidate(form)) return;
    document.getElementById("sim-form-wrap").hidden = true;
    const conf = $("sim-confirm");
    conf.hidden = false;
    conf.scrollIntoView({ behavior: "smooth", block: "center" });
    vmToast("Demande transmise", "Léa Fontaine vous rappelle sous 24 h ouvrées avec une offre détaillée.");
  });
}

document.addEventListener("DOMContentLoaded", simInit);
