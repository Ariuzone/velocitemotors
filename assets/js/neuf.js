/* ============================================================
   Fiche modèle neuf — rendu dynamique depuis ?m=slug
   ============================================================ */
"use strict";

function neufInit() {
  const slug = new URLSearchParams(location.search).get("m");
  const m = vmModele(slug);
  if (!m) { location.replace("neufs.html"); return; }
  const marq = vmMarque(m.marque);

  /* entête */
  document.title = marq.nom + " " + m.nom + " — Gamme neuve | Vélocité Motors Lille";
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", m.accroche + " " + marq.nom + " " + m.nom + " neuve à Lille : motorisations, équipements, prix et essai sur rendez-vous chez Vélocité Motors.");
  document.querySelectorAll("[data-bc-modele]").forEach((el) => el.textContent = marq.nom + " " + m.nom);
  document.getElementById("neuf-nom").textContent = marq.nom + " " + m.nom;
  document.getElementById("neuf-accroche").textContent = m.accroche;
  document.getElementById("neuf-desc").textContent = m.desc;
  document.getElementById("neuf-carroserie").textContent = m.carrosserie;

  /* galerie */
  const imgs = [m.img, m.imgAlt, m.imgAlt2].filter((v, i, a) => a.indexOf(v) === i);
  const main = document.getElementById("neuf-main-img");
  main.src = imgs[0];
  main.alt = marq.nom + " " + m.nom + " — vue extérieure";
  document.getElementById("neuf-thumbs").innerHTML = imgs.map((src, i) =>
    `<button type="button" data-src="${src}" aria-label="Vue ${i + 1}" ${i === 0 ? 'class="selected" aria-pressed="true"' : 'aria-pressed="false"'}><img src="${src}" alt="" loading="lazy"></button>`).join("");
  vmGallery(".fiche-gallery");

  /* sélection motorisation interactive */
  const specs = document.getElementById("neuf-specs");
  const motorTabs = document.getElementById("neuf-motors");
  let cur = 0;
  motorTabs.innerHTML = m.motorisations.map((mo, i) =>
    `<button type="button" class="motor-tab ${i === 0 ? "selected" : ""}" data-i="${i}" aria-pressed="${i === 0}"><b>${mo.nom}</b><span>${mo.puissance} · ${vmeur(mo.prixBase)}</span></button>`).join("");

  function renderSpecs() {
    const mo = m.motorisations[cur];
    const elec = mo.energie === "Électrique";
    const cells = [
      ["Énergie", mo.energie],
      ["Puissance", mo.puissance],
      ["0 à 100 km/h", mo.zeroCent],
      [elec ? "Autonomie WLTP" : "Consommation mixte", elec ? mo.autonomie : mo.conso],
      elec ? ["Batterie", mo.batterie] : ["Émissions CO₂", mo.co2],
      ["Vitesse maxi", mo.vitesse],
      ["Boîte", mo.boite],
      ["Longueur", m.dimensions.L],
    ];
    specs.innerHTML = cells.map(([k, v]) => `<div class="spec-cell"><div class="k">${k}</div><div class="v">${v}</div></div>`).join("");
    const price = document.getElementById("neuf-prix");
    price.textContent = vmeur(mo.prixBase);
    document.getElementById("neuf-prix-label").textContent = "à partir de · " + mo.nom;
    document.getElementById("neuf-link-config").href = "configurateur.html?m=" + m.slug;
  }
  motorTabs.addEventListener("click", (e) => {
    const b = e.target.closest(".motor-tab");
    if (!b) return;
    cur = +b.dataset.i;
    motorTabs.querySelectorAll(".motor-tab").forEach((x) => { x.classList.remove("selected"); x.setAttribute("aria-pressed", "false"); });
    b.classList.add("selected"); b.setAttribute("aria-pressed", "true");
    renderSpecs();
  });
  renderSpecs();

  /* finitions */
  document.getElementById("neuf-finitions").innerHTML = m.finitions.map((f) => `
    <div class="tile reveal">
      <div style="display:flex;justify-content:space-between;align-items:baseline;gap:10px">
        <h3>${f.nom}</h3>
        <span class="gold" style="font-weight:700;white-space:nowrap">${f.prix === 0 ? "Inclus" : "+ " + vmeur(f.prix)}</span>
      </div>
      <ul class="equip-list" style="margin-top:10px">${f.equipements.map((e) => `<li>${e}</li>`).join("")}</ul>
    </div>`).join("");

  /* couleurs */
  document.getElementById("neuf-couleurs").innerHTML = m.couleurs.map((c) =>
    `<div style="text-align:center"><button type="button" class="swatch" style="background:${c.hex};pointer-events:none" title="${c.nom}" aria-label="Peinture ${c.nom}"></button><div class="muted" style="font-size:12px;margin-top:6px">${c.nom}</div></div>`).join("");

  /* jantes + intérieurs */
  document.getElementById("neuf-jantes").innerHTML = m.jantes.map((j) =>
    `<div class="spec-cell"><div class="k">${j.nom}</div><div class="v" style="font-size:14px">${j.desc}</div></div>`).join("");
  document.getElementById("neuf-interieurs").innerHTML = m.interieurs.map((it) =>
    `<div class="spec-cell"><div class="k">${it.nom}</div><div class="v" style="font-size:14px">${it.desc}</div></div>`).join("");

  /* autres modèles */
  const others = VM.modeles.filter((x) => x.slug !== m.slug).slice(0, 3);
  const grid = document.getElementById("neuf-autres");
  if (grid) { grid.innerHTML = others.map(vmNeufCard).join(""); grid.querySelectorAll(".reveal").forEach((el) => el.classList.add("in")); }

  /* JSON-LD véhicule */
  const mo0 = m.motorisations[0];
  const ld = document.createElement("script");
  ld.type = "application/ld+json";
  ld.textContent = JSON.stringify({
    "@context": "https://schema.org", "@type": "Car",
    name: marq.nom + " " + m.nom,
    brand: { "@type": "Brand", name: marq.nom },
    description: m.accroche,
    image: "https://www.velocitemotors.fr/" + m.img,
    vehicleModelDate: "2026",
    offers: { "@type": "Offer", price: mo0.prixBase, priceCurrency: "EUR", availability: "https://schema.org/InStock", url: "https://www.velocitemotors.fr/neuf.html?m=" + m.slug },
  });
  document.head.appendChild(ld);
}

document.addEventListener("DOMContentLoaded", neufInit);
