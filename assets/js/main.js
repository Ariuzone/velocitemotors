/* ============================================================
   VÉLOCITÉ MOTORS — comportements partagés
   ============================================================ */
"use strict";

/* ---------- Navigation mobile ---------- */
(function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("main-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }
  });
})();

/* ---------- Reveal au scroll ---------- */
(function () {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => io.observe(el));
})();

/* ---------- Compteurs animés ---------- */
(function () {
  const els = document.querySelectorAll("[data-count]");
  if (!els.length) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fmt = (v, dec) => (dec ? v.toLocaleString("fr-FR", { maximumFractionDigits: 1, minimumFractionDigits: 1 }) : Math.round(v).toLocaleString("fr-FR"));
  const animate = (el) => {
    const target = parseFloat(el.dataset.count);
    const dec = el.dataset.decimal === "true";
    const suffixEl = el.querySelector(".suffix");
    if (reduced) { el.childNodes[0].textContent = fmt(target, dec); return; }
    const t0 = performance.now(), dur = 1400;
    const tick = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.childNodes[0].textContent = fmt(target * eased, dec);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => { if (en.isIntersecting) { animate(en.target); io.unobserve(en.target); } }),
    { threshold: 0.5 }
  );
  els.forEach((el) => io.observe(el));
})();

/* ---------- Toasts ---------- */
function vmToast(title, msg, type) {
  let zone = document.querySelector(".toast-zone");
  if (!zone) {
    zone = document.createElement("div");
    zone.className = "toast-zone";
    zone.setAttribute("aria-live", "polite");
    document.body.appendChild(zone);
  }
  const el = document.createElement("div");
  el.className = "toast " + (type === "err" ? "err" : "ok");
  el.innerHTML =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg><div><b>' +
    title + "</b><p>" + msg + "</p></div>";
  zone.appendChild(el);
  setTimeout(() => {
    el.classList.add("leaving");
    setTimeout(() => el.remove(), 320);
  }, 5200);
}

/* ---------- Validation de formulaire générique ---------- */
function vmValidate(form) {
  let ok = true;
  let firstBad = null;
  form.querySelectorAll("[required]").forEach((input) => {
    const field = input.closest(".field");
    let valid = true;
    const v = (input.value || "").trim();
    if (input.type === "checkbox") valid = input.checked;
    else if (!v) valid = false;
    else if (input.type === "email") valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
    else if (input.dataset.type === "tel") valid = /^(\+?\d[\d\s.-]{7,})$/.test(v);
    if (field) {
      field.classList.toggle("invalid", !valid);
      field.classList.toggle("valid", valid);
    }
    if (!valid) { ok = false; firstBad = firstBad || input; }
  });
  if (firstBad) {
    firstBad.focus();
    vmToast("Formulaire incomplet", "Merci de vérifier les champs signalés en rouge.", "err");
  }
  return ok;
}
document.addEventListener("input", (e) => {
  const field = e.target.closest(".field");
  if (field && field.classList.contains("invalid") && e.target.value.trim()) field.classList.remove("invalid");
});

/* ---------- Accordéons FAQ ---------- */
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".faq-q");
  if (!btn) return;
  const panel = btn.parentElement.querySelector(".faq-a");
  const open = btn.getAttribute("aria-expanded") === "true";
  btn.setAttribute("aria-expanded", String(!open));
  panel.style.maxHeight = open ? "0px" : panel.scrollHeight + "px";
});

/* ---------- Galeries (fiches) ---------- */
function vmGallery(rootSel) {
  const root = document.querySelector(rootSel);
  if (!root) return;
  const main = root.querySelector(".fiche-main-img img");
  root.querySelectorAll(".fiche-thumbs button").forEach((btn) => {
    btn.addEventListener("click", () => {
      root.querySelectorAll(".fiche-thumbs button").forEach((b) => { b.classList.remove("selected"); b.setAttribute("aria-pressed", "false"); });
      btn.classList.add("selected");
      btn.setAttribute("aria-pressed", "true");
      main.style.opacity = "0";
      setTimeout(() => { main.src = btn.dataset.src; main.alt = btn.dataset.alt || main.alt; main.style.opacity = "1"; }, 180);
    });
  });
}

/* ---------- Sous-menu mobile (Services) ---------- */
document.querySelectorAll(".sub-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const li = btn.closest(".has-sub");
    const open = li.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
});

/* ---------- Listes de véhicules génériques ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const ng = document.getElementById("neufs-grid");
  if (ng && typeof vmNeufCard === "function") {
    ng.innerHTML = VM.modeles.map(vmNeufCard).join("");
    ng.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
  }
  const nf = document.getElementById("neufs-featured");
  if (nf && typeof vmNeufCard === "function") {
    const picks = ["aurelis-saphir", "borgvik-nord", "tessari-vento"];
    nf.innerHTML = picks.map((s) => vmNeufCard(vmModele(s))).join("");
    nf.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
  }
  const presta = document.getElementById("atelier-prestations");
  if (presta && typeof VM !== "undefined") {
    presta.innerHTML = VM.prestations.map((p) =>
      `<tr><td>${p.nom}</td><td class="num" style="white-space:nowrap;color:var(--gold-light);font-weight:600">${p.prix}</td><td class="num">${p.duree}</td><td>${p.desc}</td></tr>`).join("");
  }
  const ev = document.getElementById("equipe-ventes");
  const ea = document.getElementById("equipe-atelier");
  if ((ev || ea) && typeof VM !== "undefined") {
    const card = (p) => `<div class="member-card reveal in">
      <div class="member-photo"><img src="${p.img}" alt="Portrait de ${p.nom}, ${p.role.toLowerCase()}" loading="lazy"></div>
      <h3>${p.nom}</h3><p class="member-role">${p.role}</p>
      <p class="member-bio">${p.bio}</p></div>`;
    if (ev) ev.innerHTML = VM.equipe.filter((p) => p.dept !== "Atelier").map(card).join("");
    if (ea) ea.innerHTML = VM.equipe.filter((p) => p.dept === "Atelier").map(card).join("");
  }
});

/* ---------- Formulaires « démo » génériques ---------- */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("form.js-confirm").forEach((f) => {
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!vmValidate(f)) return;
      const wrap = document.getElementById(f.dataset.wrap);
      const conf = document.getElementById(f.dataset.confirm);
      if (wrap) wrap.hidden = true;
      if (conf) {
        conf.hidden = false;
        conf.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      vmToast(f.dataset.toastTitle || "Demande envoyée", f.dataset.toastMsg || "Nous revenons vers vous très rapidement.");
    });
  });
});
