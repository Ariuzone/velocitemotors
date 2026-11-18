/* ============================================================
   Occasions — filtres, tri et rendu
   ============================================================ */
"use strict";

const OCC = { f: { marque: "", modele: "", energie: "", boite: "", budget: 200000, km: 200000, annee: 2000 }, tri: "prix-asc" };

function occApply() {
  const f = OCC.f;
  let list = VM.occasions.filter((o) =>
    (!f.marque || o.marque === f.marque) &&
    (!f.modele || o.modele === f.modele) &&
    (!f.energie || o.energie === f.energie) &&
    (!f.boite || o.boite === f.boite) &&
    o.prix <= f.budget &&
    o.km <= f.km &&
    o.annee >= f.annee
  );
  const sorters = {
    "prix-asc": (a, b) => a.prix - b.prix,
    "prix-desc": (a, b) => b.prix - a.prix,
    "km-asc": (a, b) => a.km - b.km,
    "annee-desc": (a, b) => b.annee - a.annee,
    "recent-desc": (a, b) => b.annee - a.annee || a.km - b.km,
  };
  list.sort(sorters[OCC.tri] || sorters["prix-asc"]);
  return list;
}

function occRender() {
  const list = occApply();
  const grid = document.getElementById("occ-grid");
  const count = document.getElementById("occ-count");
  count.textContent = list.length + " véhicule" + (list.length > 1 ? "s" : "") + " disponible" + (list.length > 1 ? "s" : "");
  const empty = document.getElementById("occ-empty");
  if (!list.length) {
    grid.innerHTML = "";
    empty.hidden = false;
    grid.hidden = true;
    return;
  }
  empty.hidden = true;
  grid.hidden = false;
  grid.innerHTML = list.map(vmOccCard).join("");
  grid.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
}

function occInit() {
  const $ = (id) => document.getElementById(id);

  /* modèles dépendant de la marque */
  const marqueSel = $("f-marque"), modeleSel = $("f-modele");
  const fillModeles = () => {
    const cur = modeleSel.value;
    const set = [...new Set(VM.occasions.filter((o) => !marqueSel.value || o.marque === marqueSel.value).map((o) => o.modele))];
    modeleSel.innerHTML = '<option value="">Tous les modèles</option>' + set.map((m) => `<option value="${m}" ${m === cur ? "selected" : ""}>${m}</option>`).join("");
  };
  fillModeles();

  const binds = [
    [marqueSel, "marque"], [modeleSel, "modele"],
    [$("f-energie"), "energie"], [$("f-boite"), "boite"],
  ];
  binds.forEach(([el, key]) => el.addEventListener("change", () => {
    if (key === "marque") fillModeles();
    OCC.f[key] = el.value;
    occRender();
  }));

  const rangeBinds = [
    [$("f-budget"), "budget", (v) => v >= 200000 ? "Illimité" : "≤ " + vmeur(v)],
    [$("f-km"), "km", (v) => v >= 200000 ? "Illimité" : "≤ " + vmnb(v) + " km"],
    [$("f-annee"), "annee", (v) => "≥ " + v],
  ];
  rangeBinds.forEach(([el, key, fmt]) => {
    const out = el.parentElement.querySelector("output");
    const upd = () => {
      OCC.f[key] = +el.value;
      out.textContent = fmt(+el.value);
      const p = (el.value - el.min) / (el.max - el.min) * 100;
      el.style.setProperty("--fill", p + "%");
    };
    el.addEventListener("input", upd);
    el.addEventListener("change", occRender);
    upd();
  });

  document.getElementById("f-tri").addEventListener("change", (e) => { OCC.tri = e.target.value; occRender(); });
  document.getElementById("f-reset").addEventListener("click", () => {
    OCC.f = { marque: "", modele: "", energie: "", boite: "", budget: 200000, km: 200000, annee: 2000 };
    OCC.tri = "prix-asc";
    $("f-marque").value = ""; fillModeles(); $("f-modele").value = ""; $("f-energie").value = ""; $("f-boite").value = "";
    $("f-budget").value = 200000; $("f-km").value = 200000; $("f-annee").value = 2000;
    document.querySelectorAll(".filters-bar input[type=range]").forEach((r) => r.dispatchEvent(new Event("input")));
    document.getElementById("f-tri").value = "prix-asc";
    occRender();
  });

  occRender();

  /* aperçu accueil (si présent) */
  const feat = document.getElementById("occ-featured");
  if (feat) {
    const picks = [...VM.occasions].sort((a, b) => a.km - b.km).slice(0, 3);
    feat.innerHTML = picks.map(vmOccCard).join("");
    feat.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
  }
}

document.addEventListener("DOMContentLoaded", occInit);
