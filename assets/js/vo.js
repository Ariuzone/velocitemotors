/* ============================================================
   Fiche véhicule d'occasion — rendu depuis ?id=
   ============================================================ */
"use strict";

function voInit() {
  const id = new URLSearchParams(location.search).get("id");
  const o = vmOccasion(id);
  if (!o) { location.replace("occasions.html"); return; }
  const marq = vmMarque(o.marque);
  const nom = marq.nom + " " + o.modele + " " + o.version;

  document.title = o.modele + " " + o.version + " (" + o.annee + ") d'occasion — " + vmeur(o.prix) + " | Vélocité Motors";
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", o.modele + " " + o.version + " " + o.annee + " d'occasion, " + vmnb(o.km) + " km, " + o.energie + ", " + o.couleur + ". " + o.garant + " — disponible à Lille chez Vélocité Motors.");

  document.querySelectorAll("[data-bc-modele]").forEach((el) => el.textContent = nom);
  document.getElementById("vo-nom").textContent = nom;
  document.getElementById("vo-badge").textContent = marq.nom + " · " + o.annee;
  document.getElementById("vo-desc").textContent = o.desc;

  const main = document.getElementById("vo-main-img");
  main.src = o.img;
  main.alt = nom + " d'occasion " + o.couleur;
  document.getElementById("vo-thumbs").innerHTML =
    `<button type="button" data-src="${o.img}" class="selected" aria-pressed="true" aria-label="Vue 1"><img src="${o.img}" alt="" loading="lazy"></button>` +
    `<button type="button" data-src="${o.img}" aria-pressed="false" aria-label="Vue 2"><img src="${o.img}" alt="" loading="lazy"></button>` +
    `<button type="button" data-src="${o.img}" aria-pressed="false" aria-label="Vue 3"><img src="${o.img}" alt="" loading="lazy"></button>`;
  vmGallery(".fiche-gallery");

  const elec = o.energie === "Électrique";
  const cells = [
    ["Prix", vmeur(o.prix)],
    ["Mise en circulation", String(o.annee)],
    ["Kilométrage", vmnb(o.km) + " km"],
    ["Énergie", o.energie],
    ["Boîte", o.boite],
    ["Puissance", o.puissance],
    [elec ? "Consommation" : "Consommation mixte", o.conso],
    ["Portes", String(o.portes)],
  ];
  document.getElementById("vo-specs").innerHTML = cells.map(([k, v]) => `<div class="spec-cell"><div class="k">${k}</div><div class="v">${v}</div></div>`).join("");
  document.getElementById("vo-prix").textContent = vmeur(o.prix);
  document.getElementById("vo-mens").textContent = vmeur(Math.round((o.prix * 0.8 * (0.039 / 12)) / (1 - Math.pow(1 + 0.039 / 12, -60)))) + " / mois";
  document.getElementById("vo-mens-link").href = "financement.html";
  document.getElementById("vo-garant").textContent = o.garant;

  document.getElementById("vo-equipements").innerHTML = o.equipements.map((e) => `<li>${e}</li>`).join("");

  const rdvSel = document.getElementById("vo-essai-link");
  rdvSel.href = "rendez-vous.html";

  /* autres occasions */
  const others = VM.occasions.filter((x) => x.id !== o.id).slice(0, 3);
  const grid = document.getElementById("vo-autres");
  if (grid) { grid.innerHTML = others.map(vmOccCard).join(""); grid.querySelectorAll(".reveal").forEach((el) => el.classList.add("in")); }

  /* JSON-LD */
  const ld = document.createElement("script");
  ld.type = "application/ld+json";
  ld.textContent = JSON.stringify({
    "@context": "https://schema.org", "@type": "Car",
    name: nom,
    brand: { "@type": "Brand", name: marq.nom },
    model: o.modele,
    vehicleModelDate: String(o.annee),
    color: o.couleur,
    mileageFromOdometer: { "@type": "QuantitativeValue", value: o.km, unitCode: "KMT" },
    vehicleTransmission: o.boite,
    fuelType: o.energie,
    image: "https://www.velocitemotors.fr/" + o.img,
    offers: { "@type": "Offer", price: o.prix, priceCurrency: "EUR", availability: "https://schema.org/InStock", itemCondition: "https://schema.org/UsedCondition", url: "https://www.velocitemotors.fr/occasion.html?id=" + o.id },
  });
  document.head.appendChild(ld);
}

document.addEventListener("DOMContentLoaded", voInit);
