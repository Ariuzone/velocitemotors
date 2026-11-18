/* ============================================================
   Gabarits de cartes véhicules (partagés)
   ============================================================ */
"use strict";

function vmIcon(name) {
  const icons = {
    speed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 12l4-4"/><path d="M12 7v1M17 12h-1M7 12h1"/></svg>',
    road: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20 6.5 4M20 20l-2.5-16M12 4v3M12 11v3M12 18v2"/></svg>',
    fuel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 22h12V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v18ZM3 10h12"/><path d="M15 8h2.5a2 2 0 0 1 2 2v6.5a1.5 1.5 0 0 0 3 0V11l-3-3"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/></svg>',
    gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"/></svg>',
    cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  };
  return icons[name] || "";
}

function vmNeufCard(m) {
  const marq = vmMarque(m.marque);
  const isElec = m.motorisations.some((mo) => mo.energie === "Électrique");
  const isHyb = m.motorisations.some((mo) => mo.energie.includes("Hybride"));
  return `<article class="car-card reveal">
    <div class="car-card-media">
      <span class="car-badge">${marq.nom}</span>
      ${isElec ? '<span class="car-badge red">100 % électrique</span>' : isHyb ? '<span class="car-badge">Hybride</span>' : ""}
      <img src="${m.img}" alt="Aperçu du modèle ${marq.nom} ${m.nom}" loading="lazy" width="640" height="400">
    </div>
    <div class="car-card-body">
      <span class="car-card-brand">${m.carrosserie}</span>
      <h3 class="car-card-title"><a href="neuf.html?m=${m.slug}">${marq.nom} ${m.nom}</a></h3>
      <p class="muted" style="margin:0">${m.accroche}</p>
      <div class="car-specs">
        <span>${vmIcon("speed")}${m.motorisations[m.motorisations.length - 1].puissance}</span>
        <span>${vmIcon("fuel")}${m.motorisations[0].conso}</span>
        <span>${vmIcon("road")}dès ${vmeur(m.motorisations[0].prixBase)}</span>
      </div>
      <div class="car-card-foot">
        <div class="car-price">${vmeur(m.motorisations[0].prixBase)}<small>à partir de</small></div>
        <a class="btn btn-ghost btn-sm" href="neuf.html?m=${m.slug}">Découvrir<span class="sr-only"> le modèle ${marq.nom} ${m.nom}</span></a>
      </div>
    </div>
  </article>`;
}

function vmOccCard(o) {
  const marq = vmMarque(o.marque);
  return `<article class="car-card reveal">
    <div class="car-card-media">
      <span class="car-badge">${marq.nom}</span>
      ${o.km < 20000 ? '<span class="car-badge red">Faible kilométrage</span>' : ""}
      <img src="${o.img}" alt="${marq.nom} ${o.modele} ${o.version} d'occasion, ${o.couleur}" loading="lazy" width="640" height="400">
    </div>
    <div class="car-card-body">
      <span class="car-card-brand">${marq.nom} ${o.modele} · ${o.annee}</span>
      <h3 class="car-card-title"><a href="occasion.html?id=${o.id}">${o.modele} ${o.version}</a></h3>
      <div class="car-specs">
        <span>${vmIcon("road")}${vmnb(o.km)} km</span>
        <span>${vmIcon(o.energie === "Électrique" ? "bolt" : "fuel")}${o.energie}</span>
        <span>${vmIcon("gear")}${o.boite}</span>
      </div>
      <div class="car-card-foot">
        <div class="car-price">${vmeur(o.prix)}<small>${o.garant}</small></div>
        <a class="btn btn-ghost btn-sm" href="occasion.html?id=${o.id}">Voir la fiche<span class="sr-only"> de la ${marq.nom} ${o.modele} de ${o.annee}</span></a>
      </div>
    </div>
  </article>`;
}
