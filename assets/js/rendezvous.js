/* ============================================================
   Prise de rendez-vous — essai routier & atelier (créneaux simulés)
   ============================================================ */
"use strict";

const RDV = { mode: "essai", date: null, slot: null };

function rdvHash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (h >>> 0);
}

function rdvDays() {
  const days = [];
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  while (days.length < 10) {
    d.setDate(d.getDate() + 1);
    if (d.getDay() === 0) continue; /* dimanche fermé */
    days.push(new Date(d));
  }
  return days;
}

function rdvSlots(date, mode) {
  const key = date.toISOString().slice(0, 10);
  const iso = date.getDay();
  const slots = [];
  const push = (h, mn) => {
    const label = String(h).padStart(2, "0") + " h " + String(mn).padStart(2, "0");
    const seed = rdvHash(key + mode + h + ":" + mn) % 100;
    const libre = seed > 32; /* ~2/3 de créneaux libres, stable */
    slots.push({ label, libre });
  };
  const matin = iso === 6 ? [[9, 30], [10, 30], [11, 30]] : [[9, 0], [10, 0], [11, 0], [12, 0]];
  const aprem = iso === 6 ? [] : [[14, 0], [15, 0], [16, 0], [17, 0], [18, 0]];
  matin.forEach((t) => push(t[0], t[1]));
  aprem.forEach((t) => push(t[0], t[1]));
  return slots;
}

function rdvRenderDays() {
  const days = rdvDays();
  const wrap = document.getElementById("rdv-days");
  if (!RDV.date) RDV.date = days[0];
  wrap.innerHTML = days.map((d) => {
    const sel = d.toDateString() === RDV.date.toDateString();
    const label = d.toLocaleDateString("fr-FR", { weekday: "short" }).replace(".", "");
    const num = d.getDate();
    const mois = d.toLocaleDateString("fr-FR", { month: "short" }).replace(".", "");
    return `<button type="button" class="day-tab ${sel ? "selected" : ""}" data-ts="${d.getTime()}" aria-pressed="${sel}"><b>${label} ${num}</b><span>${mois}</span></button>`;
  }).join("");
  wrap.querySelectorAll(".day-tab").forEach((b) => b.addEventListener("click", () => {
    RDV.date = new Date(+b.dataset.ts);
    RDV.slot = null;
    rdvRenderDays();
    rdvRenderSlots();
  }));
}

function rdvRenderSlots() {
  const wrap = document.getElementById("rdv-slots");
  const slots = rdvSlots(RDV.date, RDV.mode);
  wrap.innerHTML = slots.map((s) =>
    `<button type="button" class="slot ${s.label === RDV.slot ? "selected" : ""}" ${s.libre ? "" : "disabled"} aria-pressed="${s.label === RDV.slot}">
      ${s.label}${s.libre ? "" : '<span class="sr-only"> — indisponible</span>'}
    </button>`).join("");
  wrap.querySelectorAll(".slot:not(:disabled)").forEach((b) => b.addEventListener("click", () => {
    RDV.slot = b.textContent.trim();
    wrap.querySelectorAll(".slot").forEach((x) => { x.classList.remove("selected"); x.setAttribute("aria-pressed", "false"); });
    b.classList.add("selected"); b.setAttribute("aria-pressed", "true");
  }));
}

function rdvInit() {
  const $ = (id) => document.getElementById(id);

  /* onglets essai / atelier */
  document.querySelectorAll("#rdv-modes .seg").forEach((b) => b.addEventListener("click", () => {
    document.querySelectorAll("#rdv-modes .seg").forEach((x) => { x.classList.remove("selected"); x.setAttribute("aria-pressed", "false"); });
    b.classList.add("selected"); b.setAttribute("aria-pressed", "true");
    RDV.mode = b.dataset.mode; RDV.slot = null;
    $("rdv-essai-fields").hidden = RDV.mode !== "essai";
    $("rdv-atelier-fields").hidden = RDV.mode !== "atelier";
    document.querySelector("#rdv-essai-fields").disabled = false;
    rdvRenderSlots();
  }));

  /* choix du véhicule pour l'essai */
  const veh = $("rdv-vehicule");
  veh.innerHTML = '<option value="">Choisir un véhicule…</option>' +
    VM.modeles.map((m) => `<option value="neuf:${m.slug}">Neuf — ${vmMarque(m.marque).nom} ${m.nom}</option>`).join("") +
    VM.occasions.map((o) => `<option value="occ:${o.id}">Occasion — ${vmMarque(o.marque).nom} ${o.modele} ${o.version} (${o.annee})</option>`).join("");

  /* prestations atelier */
  $("rdv-presta").innerHTML = '<option value="">Choisir une prestation…</option>' +
    VM.prestations.map((p) => `<option>${p.nom}</option>`).join("");

  rdvRenderDays();
  rdvRenderSlots();

  const form = $("rdv-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!RDV.slot) {
      vmToast("Créneau manquant", "Choisissez un horaire dans la grille avant d'envoyer.", "err");
      return;
    }
    if (!vmValidate(form)) return;
    const dateTxt = RDV.date.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
    $("rdv-confirm-recap").textContent =
      (RDV.mode === "essai" ? "Essai routier" : "Rendez-vous atelier — " + $("rdv-presta").value) +
      " · " + dateTxt + " à " + RDV.slot;
    $("rdv-form-wrap").hidden = true;
    $("rdv-confirm").hidden = false;
    $("rdv-confirm").scrollIntoView({ behavior: "smooth", block: "center" });
    vmToast("Rendez-vous confirmé", "Un e-mail de rappel vous sera envoyé. Élodie vous accueille à l'atelier.");
  });
}

document.addEventListener("DOMContentLoaded", rdvInit);
