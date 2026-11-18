/* ============================================================
   Reprise — estimation en ligne (indicative)
   ============================================================ */
"use strict";

function repCote(annee, km, energie, etat) {
  /* modèle de cote simplifié et transparent */
  const age = Math.max(0, new Date().getFullYear() - annee);
  let base;
  if (energie === "Électrique") base = 42000;
  else if (energie === "Hybride" || energie === "Hybride rechargeable") base = 36000;
  else if (energie === "Diesel") base = 26000;
  else base = 30000;
  base *= Math.pow(0.86, age); /* décote par année */
  base *= Math.max(0.45, 1 - km / 320000); /* décote kilométrique */
  const etatCoef = { excellent: 1.08, bon: 1, moyen: 0.86, travail: 0.7 }[etat] || 1;
  base *= etatCoef;
  const val = Math.max(800, Math.round(base / 100) * 100);
  return { bas: Math.round(val * 0.9 / 100) * 100, haut: Math.round(val * 1.1 / 100) * 100 };
}

function repInit() {
  const $ = (id) => document.getElementById(id);
  const annee = $("rep-annee"), km = $("rep-km"), energie = $("rep-energie"), etat = $("rep-etat");
  const out = $("rep-resultat");
  const yrs = [];
  for (let y = new Date().getFullYear() - 1; y >= 2005; y--) yrs.push(y);
  annee.innerHTML = '<option value="">Année…</option>' + yrs.map((y) => `<option>${y}</option>`).join("");

  function upd() {
    if (!annee.value || !km.value) {
      out.innerHTML = '<p class="muted">Renseignez l\'année et le kilométrage pour afficher une estimation indicative.</p>';
      return;
    }
    const r = repCote(+annee.value, +km.value, energie.value, etat.value);
    out.innerHTML = `
      <p class="muted" style="margin-bottom:6px">Fourchette d'estimation indicative</p>
      <div class="sim-result" style="padding:0">
        <div class="big">${vmeur(r.bas)}<small> — </small></div>
        <div class="big" style="margin-top:-14px">${vmeur(r.haut)}</div>
      </div>
      <p class="form-note">Estimation non contractuelle calculée sur nos références de revente locales. L'offre ferme est établie après expertise gratuite de 30 minutes dans nos locaux.</p>`;
  }
  [km, annee, energie, etat].forEach((el) => el.addEventListener("input", upd));
  upd();

  const form = $("rep-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!vmValidate(form)) return;
    $("rep-form-wrap").hidden = true;
    const conf = $("rep-confirm");
    conf.hidden = false;
    conf.scrollIntoView({ behavior: "smooth", block: "center" });
    vmToast("Demande enregistrée", "Antoine Carlier vous contacte pour fixer l'expertise gratuite.");
  });
}

document.addEventListener("DOMContentLoaded", repInit);
