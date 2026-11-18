/* ============================================================
   Configurateur — rendu SVG paramétrique + prix temps réel
   ============================================================ */
"use strict";

/* --- Voiture SVG stylisée (vue de profil, originale) --- */
function vmCarSVG(opts) {
  const o = Object.assign({ couleur: "#1E3A5F", type: "berline", jante: 5, or: "#C8A96A" }, opts);
  const jantes = { 5: 5, 7: 7, 10: 10 };
  const spokes = jantes[o.jante] || 5;
  let x0 = 55, x1 = 845, roofY = 108, bodyY = 196, cabinShift = 0;
  if (o.type === "suv") { roofY = 84; bodyY = 172; }
  if (o.type === "citadine") { x0 = 120; x1 = 780; roofY = 118; bodyY = 200; }
  if (o.type === "gt") { roofY = 118; bodyY = 202; cabinShift = 40; }
  const wheelY = 268, rTire = 50, fW = x1 - 165, rW = x0 + 165;
  let spokesPath = "";
  for (let i = 0; i < spokes; i++) {
    const a = (Math.PI * 2 * i) / spokes;
    spokesPath += `<line x1="${(fW - Math.cos(a) * 12).toFixed(1)}" y1="${(wheelY - Math.sin(a) * 12).toFixed(1)}" x2="${(fW + Math.cos(a) * 26).toFixed(1)}" y2="${(wheelY + Math.sin(a) * 26).toFixed(1)}"/>`;
  }
  let spokesPathR = "";
  for (let i = 0; i < spokes; i++) {
    const a = (Math.PI * 2 * i) / spokes;
    spokesPathR += `<line x1="${(rW - Math.cos(a) * 12).toFixed(1)}" y1="${(wheelY - Math.sin(a) * 12).toFixed(1)}" x2="${(rW + Math.cos(a) * 26).toFixed(1)}" y2="${(wheelY + Math.sin(a) * 26).toFixed(1)}"/>`;
  }
  return `<svg viewBox="0 0 900 360" role="img" aria-label="Aperçu du véhicule choisi dans la peinture sélectionnée">
  <defs>
    <linearGradient id="cBody" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${o.couleur}" stop-opacity="1"/>
      <stop offset="0.55" stop-color="${o.couleur}"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.45"/>
    </linearGradient>
    <linearGradient id="cGlass" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#3A4353"/>
      <stop offset="1" stop-color="#12161D"/>
    </linearGradient>
    <radialGradient id="cShadow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#000" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#000" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <ellipse cx="450" cy="318" rx="400" ry="26" fill="url(#cShadow)"/>
  <!-- caisse -->
  <path d="M ${x0} ${bodyY + 62}
           C ${x0} ${bodyY + 30} ${x0 + 22} ${bodyY + 12} ${x0 + 70} ${bodyY + 8}
           L ${x1 - 90} ${bodyY}
           C ${x1 - 30} ${bodyY + 2} ${x1} ${bodyY + 22} ${x1 - 2} ${bodyY + 46}
           C ${x1 - 4} ${bodyY + 62} ${x1 - 14} ${bodyY + 74} ${x1 - 30} ${bodyY + 76}
           L ${x0 + 28} ${bodyY + 78}
           C ${x0 + 10} ${bodyY + 76} ${x0} ${bodyY + 70} ${x0} ${bodyY + 62} Z"
        fill="url(#cBody)" stroke="rgba(244,241,234,0.14)" stroke-width="1.5"/>
  <!-- habitacle -->
  <path d="M ${x0 + 195 + cabinShift} ${bodyY + 4}
           C ${x0 + 235 + cabinShift} ${roofY + 22} ${x0 + 300 + cabinShift} ${roofY} ${x0 + 370 + cabinShift} ${roofY - 2}
           L ${x0 + 520 + cabinShift} ${roofY - 2}
           C ${x0 + 590 + cabinShift} ${roofY} ${x0 + 645 + cabinShift} ${roofY + 26} ${x0 + 690 + cabinShift} ${bodyY + 2}
           Z" fill="${o.couleur}" stroke="rgba(244,241,234,0.14)" stroke-width="1.5"/>
  <!-- vitrages -->
  <path d="M ${x0 + 232 + cabinShift} ${bodyY - 6}
           C ${x0 + 262 + cabinShift} ${roofY + 26} ${x0 + 312 + cabinShift} ${roofY + 10} ${x0 + 372 + cabinShift} ${roofY + 8}
           L ${x0 + 430 + cabinShift} ${roofY + 8} L ${x0 + 430 + cabinShift} ${bodyY - 6} Z" fill="url(#cGlass)"/>
  <path d="M ${x0 + 452 + cabinShift} ${roofY + 8} L ${x0 + 516 + cabinShift} ${roofY + 8}
           C ${x0 + 566 + cabinShift} ${roofY + 12} ${x0 + 606 + cabinShift} ${roofY + 30} ${x0 + 640 + cabinShift} ${bodyY - 6}
           L ${x0 + 452 + cabinShift} ${bodyY - 6} Z" fill="url(#cGlass)"/>
  <!-- détails -->
  <line x1="${x0 + 440 + cabinShift}" y1="${bodyY - 4}" x2="${x0 + 440 + cabinShift}" y2="${bodyY + 70}" stroke="rgba(11,14,19,0.5)" stroke-width="2"/>
  <rect x="${x0 + 452 + cabinShift}" y="${bodyY + 18}" width="34" height="7" rx="3.5" fill="rgba(244,241,234,0.35)"/>
  <rect x="${x0 + 14}" y="${bodyY + 20}" width="40" height="10" rx="5" fill="#E8CE96"/>
  <rect x="${x1 - 48}" y="${bodyY + 20}" width="36" height="9" rx="4.5" fill="#C0392B"/>
  <rect x="${x0 + 120}" y="${bodyY + 40}" width="${x1 - x0 - 240}" height="3" fill="rgba(244,241,234,0.10)"/>
  <!-- roues -->
  ${[fW, rW].map((cx, i) => `<g>
    <circle cx="${cx}" cy="${wheelY}" r="${rTire}" fill="#0C0E12" stroke="rgba(244,241,234,0.16)" stroke-width="2"/>
    <circle cx="${cx}" cy="${wheelY}" r="31" fill="#171C25" stroke="${o.or}" stroke-width="2"/>
    <g stroke="${o.or}" stroke-width="3" stroke-linecap="round" opacity="0.9">${i === 0 ? spokesPath : spokesPathR}</g>
    <circle cx="${cx}" cy="${wheelY}" r="6" fill="${o.or}"/>
  </g>`).join("")}
</svg>`;
}

/* --- Configuration courante --- */
const CFG = {
  modele: null, motor: 0, finition: 0, couleur: 0, jante: 0, interieur: 0,
  options: new Set(),
};

function cfgPrice() {
  const m = CFG.modele;
  let total = m.motorisations[CFG.motor].prixBase;
  total += m.finitions[CFG.finition].prix;
  total += m.couleurs[CFG.couleur].prix;
  total += m.jantes[CFG.jante].prix;
  total += m.interieurs[CFG.interieur].prix;
  CFG.options.forEach((i) => { total += m.options[i].prix; });
  return total;
}

function cfgMensualite(total) {
  const apport = total * 0.2;
  const n = 60, taux = 0.039 / 12;
  const c = total - apport;
  return (c * taux) / (1 - Math.pow(1 + taux, -n));
}

function cfgRender() {
  const m = CFG.modele;
  document.getElementById("cfg-stage").innerHTML =
    vmCarSVG({ couleur: m.couleurs[CFG.couleur].hex, type: cfgBodyType(m.carrosserie), jante: CFG.jante + 1 });
  document.getElementById("cfg-step-label").textContent =
    "Aperçu — " + vmMarque(m.marque).nom + " " + m.nom + " · " + m.couleurs[CFG.couleur].nom;
  const live = document.getElementById("cfg-live");
  if (live) live.textContent = "Aperçu mis à jour : " + vmMarque(m.marque).nom + " " + m.nom + ", peinture " + m.couleurs[CFG.couleur].nom;

  // récap
  const rows = [
    ["Modèle", vmMarque(m.marque).nom + " " + m.nom],
    ["Motorisation", m.motorisations[CFG.motor].nom],
    ["Finition", m.finitions[CFG.finition].nom],
    ["Peinture", m.couleurs[CFG.couleur].nom],
    ["Jantes", m.jantes[CFG.jante].nom],
    ["Intérieur", m.interieurs[CFG.interieur].nom],
  ];
  const optRows = [...CFG.options].map((i) => [m.options[i].nom, vmeur(m.options[i].prix)]);
  const el = document.getElementById("cfg-summary");
  el.innerHTML =
    rows.map(([k, v]) => `<div class="summary-row"><span>${k}</span><span class="val">${v}</span></div>`).join("") +
    (optRows.length ? `<div class="option-group-title">Options</div>` + optRows.map(([k, v]) => `<div class="summary-row"><span>${k}</span><span class="val">${v}</span></div>`).join("") : "") +
    `<div class="summary-row total"><span>Prix total configuré</span><span class="val summary-price" id="cfg-total">${vmeur(cfgPrice())}</span></div>
     <div class="summary-row"><span>ou en LOA dès</span><span class="val" id="cfg-loa">${vmeur(Math.round(cfgMensualite(cfgPrice())))} / mois</span></div>`;

  document.getElementById("cfg-total-value");
}

function cfgBodyType(carrosserie) {
  const c = carrosserie.toLowerCase();
  if (c.includes("suv")) return "suv";
  if (c.includes("citadine")) return "citadine";
  if (c.includes("gt") || c.includes("cabriolet") || c.includes("sport") || c.includes("supercar") || c.includes("piste")) return "gt";
  return "berline";
}

function cfgChip(sel, index, inner) {
  return `<button type="button" class="opt-chip ${index === CFG[sel] ? "selected" : ""}" data-sel="${sel}" data-i="${index}" aria-pressed="${index === CFG[sel]}">${inner}</button>`;
}

function cfgBuild(modelSlug) {
  const m = vmModele(modelSlug) || VM.modeles[0];
  CFG.modele = m; CFG.motor = 0; CFG.finition = 0; CFG.couleur = 0; CFG.jante = 0; CFG.interieur = 0; CFG.options = new Set();
  document.getElementById("cfg-title").textContent = vmMarque(m.marque).nom + " " + m.nom;

  /* motorisations */
  document.getElementById("cfg-motors").innerHTML =
    m.motorisations.map((mo, i) => cfgChip("motor", i, `<span class="opt-name"><b>${mo.nom}</b><span>${mo.energie} · ${mo.puissance} · ${mo.conso}</span></span><span class="opt-price">${i === 0 ? "inclus" : "+ " + vmeur(mo.prixBase - m.motorisations[0].prixBase)}</span>`)).join("");

  /* finitions */
  document.getElementById("cfg-finitions").innerHTML =
    m.finitions.map((f, i) => cfgChip("finition", i, `<span class="opt-name"><b>${f.nom}</b><span>${f.equipements.slice(0, 3).join(" · ")}…</span></span><span class="opt-price">${f.prix === 0 ? "inclus" : "+ " + vmeur(f.prix)}</span>`)).join("");

  /* couleurs */
  document.getElementById("cfg-couleurs").innerHTML =
    m.couleurs.map((c, i) => `<button type="button" class="swatch ${i === CFG.couleur ? "selected" : ""}" data-sel="couleur" data-i="${i}" style="background:${c.hex}" title="${c.nom} — ${c.prix ? "+ " + vmeur(c.prix) : "inclus"}" aria-label="Peinture ${c.nom}" aria-pressed="${i === CFG.couleur}"></button>`).join("");
  document.getElementById("cfg-couleur-nom").textContent = m.couleurs[CFG.couleur].nom + (m.couleurs[CFG.couleur].prix ? " · +" + vmeur(m.couleurs[CFG.couleur].prix) : " · incluse");

  /* jantes */
  document.getElementById("cfg-jantes").innerHTML =
    m.jantes.map((j, i) => cfgChip("jante", i, `<span class="opt-name"><b>${j.nom}</b><span>${j.desc}</span></span><span class="opt-price">${j.prix === 0 ? "incluses" : "+ " + vmeur(j.prix)}</span>`)).join("");

  /* intérieurs */
  document.getElementById("cfg-interieurs").innerHTML =
    m.interieurs.map((it, i) => cfgChip("interieur", i, `<span class="opt-name"><b>${it.nom}</b><span>${it.desc}</span></span><span class="opt-price">${it.prix === 0 ? "inclus" : "+ " + vmeur(it.prix)}</span>`)).join("");

  /* options */
  const cats = { confort: "Confort & équipements", aide: "Aides à la conduite", multimedia: "Multimédia", performance: "Performance", style: "Style & personnalisation", recharge: "Recharge", protection: "Protection", experience: "Expériences" };
  const byCat = {};
  m.options.forEach((op, i) => { (byCat[op.cat] = byCat[op.cat] || []).push(i); });
  document.getElementById("cfg-options").innerHTML = Object.keys(cats)
    .filter((c) => byCat[c])
    .map((c) => `<div class="option-group-title">${cats[c]}</div><div class="opt-row">` +
      byCat[c].map((i) => {
        const op = m.options[i];
        return `<label class="opt-chip" style="cursor:pointer"><span class="opt-name"><b>${op.nom}</b></span><span class="opt-price">+ ${vmeur(op.prix)}</span><input type="checkbox" class="cfg-opt sr-only" data-i="${i}"></label>`;
      }).join("") + "</div>").join("");

  cfgBind();
  cfgRender();
}

function cfgBind() {
  document.querySelectorAll("#cfg-body [data-sel]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const sel = btn.dataset.sel, i = +btn.dataset.i;
      CFG[sel] = i;
      const wrap = btn.closest(".config-panel");
      wrap.querySelectorAll("[data-sel='" + sel + "']").forEach((b) => { b.classList.remove("selected"); b.setAttribute("aria-pressed", "false"); });
      btn.classList.add("selected"); btn.setAttribute("aria-pressed", "true");
      if (sel === "couleur") {
        const c = CFG.modele.couleurs[i];
        document.getElementById("cfg-couleur-nom").textContent = c.nom + (c.prix ? " · +" + vmeur(c.prix) : " · incluse");
      }
      cfgRender();
    });
  });
  document.querySelectorAll(".cfg-opt").forEach((cb) => {
    cb.addEventListener("change", () => {
      const i = +cb.dataset.i;
      cb.checked ? CFG.options.add(i) : CFG.options.delete(i);
      cb.closest(".opt-chip").style.borderColor = cb.checked ? "var(--gold)" : "";
      cb.closest(".opt-chip").style.background = cb.checked ? "rgba(200,169,106,0.07)" : "";
      cfgRender();
    });
  });
}

function cfgInit() {
  const sel = document.getElementById("cfg-modele-select");
  sel.innerHTML = VM.modeles
    .map((m) => `<option value="${m.slug}">${vmMarque(m.marque).nom} ${m.nom} — ${m.carrosserie}</option>`).join("");
  const params = new URLSearchParams(location.search);
  const want = params.get("m");
  sel.value = want && vmModele(want) ? want : VM.modeles[0].slug;
  sel.addEventListener("change", () => {
    cfgBuild(sel.value);
    history.replaceState(null, "", "?m=" + sel.value);
  });
  cfgBuild(sel.value);

  const form = document.getElementById("cfg-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!vmValidate(form)) return;
    document.getElementById("cfg-form-wrap").hidden = true;
    const conf = document.getElementById("cfg-confirm");
    conf.hidden = false;
    document.getElementById("cfg-recap-final").textContent =
      vmMarque(CFG.modele.marque).nom + " " + CFG.modele.nom + " · " +
      CFG.modele.motorisations[CFG.motor].nom + " · " + CFG.modele.couleurs[CFG.couleur].nom +
      " — " + vmeur(cfgPrice());
    conf.scrollIntoView({ behavior: "smooth", block: "center" });
    vmToast("Demande envoyée", "Votre devis configuré vous sera transmis par e-mail sous 24 h ouvrées.");
  });
}

document.addEventListener("DOMContentLoaded", cfgInit);
