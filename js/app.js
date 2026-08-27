import {
  SITE,
  AWARDS,
  EXPERIENCE,
  PROJECTS,
  CERTIFICATIONS,
} from "./data.js";

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function initials(text) {
  return String(text || "C")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function renderHero() {
  $("#hero-name").innerHTML = `${escapeHtml(SITE.name.split(" ")[0])} <em>${escapeHtml(SITE.nickname)}</em> ${escapeHtml(
    SITE.name.split(" ").slice(2).join(" ")
  )}`;
  $("#hero-role").textContent = `${SITE.role} · ${SITE.school}`;
  $("#hero-bio").textContent = SITE.bio;
  const photo = $("#hero-photo");
  photo.src = SITE.photo;
  photo.alt = `Portrait of ${SITE.name}`;
  $("#linkedin-btn").href = SITE.linkedin;
  $("#github-btn").href = SITE.github;
  $("#email-btn").href = `mailto:${SITE.email}`;
}

function renderAwards() {
  const track = $("#awards-track");
  const items = AWARDS.map(
    (award) => {
      const inner = `<span>${escapeHtml(award.title)}</span>`;
      return award.url
        ? `<a class="award-chip" href="${escapeAttr(award.url)}" target="_blank" rel="noopener noreferrer">${inner}</a>`
        : `<span class="award-chip">${inner}</span>`;
    }
  ).join("");
  track.innerHTML = items + items;
}

function renderExperience() {
  $("#experience-list").innerHTML = EXPERIENCE.map(
    (item, index) => `
      <article class="exp-item reveal" style="--delay: ${index * 80}ms">
        <div class="exp-meta">
          <span class="exp-index">${String(index + 1).padStart(2, "0")}</span>
          ${item.period ? `<span class="exp-period">${escapeHtml(item.period)}</span>` : ""}
        </div>
        <div class="exp-body">
          <h3>
            ${
              item.url
                ? `<a href="${escapeAttr(item.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.org)}</a>`
                : escapeHtml(item.org)
            }
          </h3>
          <ul>
            ${(item.roles || [])
              .map(
                (role) => `
                  <li>
                    <strong>${escapeHtml(role.title)}</strong>
                    ${role.detail ? `<span>${escapeHtml(role.detail)}</span>` : ""}
                  </li>`
              )
              .join("")}
          </ul>
        </div>
      </article>`
  ).join("");
}

function uniqueCategories() {
  return [...new Set(PROJECTS.map((project) => project.category).filter(Boolean))];
}

function renderProjectFilters() {
  const categories = uniqueCategories();
  $("#project-filters").innerHTML = ["All", ...categories]
    .map(
      (category, index) => `
        <button
          class="filter-chip${index === 0 ? " is-active" : ""}"
          type="button"
          data-filter="${escapeAttr(category)}"
        >${escapeHtml(category)}</button>`
    )
    .join("");
}

function renderProjects(filter = "All") {
  const grid = $("#project-grid");
  const visible = PROJECTS.filter(
    (project) => filter === "All" || project.category === filter
  );

  grid.innerHTML = visible
    .map(
      (project, index) => `
        <a
          class="project-card reveal"
          style="--delay: ${index * 50}ms"
          href="${escapeAttr(project.url)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="project-media">
            <img src="${escapeAttr(encodeURI(project.image))}" alt="${escapeAttr(project.title)}" loading="lazy">
          </div>
          <div class="project-body">
            <span class="project-cat">${escapeHtml(project.category)}</span>
            <h3>${escapeHtml(project.title)}</h3>
            <p>${escapeHtml(project.description)}</p>
            <span class="project-cta">View work</span>
          </div>
        </a>`
    )
    .join("");

  observeReveals();
}

function diplomaMarkup(cert) {
  return `
    <div class="diploma" aria-hidden="true">
      <div class="diploma-ornament"></div>
      <p class="diploma-kicker">Certificate of Completion</p>
      <p class="diploma-title">${escapeHtml(cert.title)}</p>
      <p class="diploma-issuer">${escapeHtml(cert.issuer || "Credential")}</p>
      <div class="diploma-seal">${escapeHtml(initials(cert.issuer || cert.title))}</div>
    </div>`;
}

function renderCertifications() {
  $("#cert-grid").innerHTML = CERTIFICATIONS.map((cert, index) => {
    const hasImage = Boolean(cert.image);
    const media = hasImage
      ? `<img src="${escapeAttr(encodeURI(cert.image))}" alt="${escapeAttr(cert.title)} certificate" loading="lazy">`
      : diplomaMarkup(cert);

    const description = cert.description
      ? `<p>${escapeHtml(cert.description)}</p>`
      : "";
    const year = cert.year ? `<span class="cert-year">${escapeHtml(cert.year)}</span>` : "";
    const linkHint = cert.url ? `<span class="cert-link">View credential</span>` : "";

    const article = `
      <article
        class="cert-card reveal${hasImage ? " has-image" : ""}"
        style="--delay: ${index * 60}ms"
        ${hasImage ? `data-image="${escapeAttr(encodeURI(cert.image))}" data-title="${escapeAttr(cert.title)}"` : ""}
      >
        <div class="cert-media">${media}</div>
        <div class="cert-body">
          <div class="cert-topline">
            ${cert.issuer ? `<span class="cert-issuer">${escapeHtml(cert.issuer)}</span>` : ""}
            ${year}
          </div>
          <h3>${escapeHtml(cert.title)}</h3>
          ${description}
          ${linkHint}
        </div>
      </article>`;

    if (cert.url) {
      return `<a class="cert-wrap" href="${escapeAttr(cert.url)}" target="_blank" rel="noopener noreferrer">${article}</a>`;
    }
    return article;
  }).join("");

  observeReveals();
}

function renderFooter() {
  $("#footer-copy").textContent = `© ${new Date().getFullYear()} ${SITE.name}`;
  $("#footer-email").href = `mailto:${SITE.email}`;
  $("#footer-linkedin").href = SITE.linkedin;
  $("#footer-github").href = SITE.github;
}

const revealObservers = [];

function observeReveals() {
  revealObservers.forEach((observer) => observer.disconnect());
  revealObservers.length = 0;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    $$(".reveal").forEach((el) => el.classList.add("in-view"));
    return;
  }

  const groups = new Map();
  $$(".reveal").forEach((el) => {
    const root = el.closest(".scroll-panel") || null;
    const key = root || "viewport";
    if (!groups.has(key)) groups.set(key, { root, els: [] });
    groups.get(key).els.push(el);
  });

  groups.forEach(({ root, els }) => {
    const observer = new IntersectionObserver(
      (entries, current) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in-view");
          current.unobserve(entry.target);
        });
      },
      {
        root,
        threshold: 0.12,
        rootMargin: root ? "0px 0px -16px 0px" : "0px 0px -40px 0px",
      }
    );
    els.forEach((el) => observer.observe(el));
    revealObservers.push(observer);
  });
}

function updateScrollFade(panel) {
  const shell = panel.closest(".scroll-shell");
  if (!shell) return;
  const overflow = panel.scrollHeight > panel.clientHeight + 2;
  shell.classList.toggle("has-overflow", overflow);
  shell.classList.toggle("is-scrolled", panel.scrollTop > 6);
  const atEnd = panel.scrollTop + panel.clientHeight >= panel.scrollHeight - 8;
  shell.classList.toggle("is-end", !overflow || atEnd);
}

function updateAllScrollFades() {
  $$(".scroll-panel").forEach(updateScrollFade);
}

function initScrollPanels() {
  $$(".scroll-panel").forEach((panel) => {
    panel.addEventListener("scroll", () => updateScrollFade(panel), { passive: true });
    const observer = new ResizeObserver(() => updateScrollFade(panel));
    observer.observe(panel);
    updateScrollFade(panel);
  });
}

function initNav() {
  const header = $(".site-header");
  const toggle = $(".nav-toggle");
  const nav = $("#site-nav");

  toggle.addEventListener("click", () => {
    const open = header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  $$(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  const sections = $$("main section[id]");
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        $$(".nav-links a").forEach((link) => {
          link.classList.toggle(
            "is-active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  sections.forEach((section) => navObserver.observe(section));

  window.addEventListener(
    "scroll",
    () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
      const progress = $("#scroll-progress");
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    },
    { passive: true }
  );
}

function initTheme() {
  const stored = localStorage.getItem("theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const theme = stored || (prefersLight ? "light" : "dark");
  document.documentElement.dataset.theme = theme;
  $("#theme-toggle").setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);

  $("#theme-toggle").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    $("#theme-toggle").setAttribute("aria-label", `Switch to ${next === "dark" ? "light" : "dark"} theme`);
  });
}

function initFilters() {
  $("#project-filters").addEventListener("click", (event) => {
    const button = event.target.closest(".filter-chip");
    if (!button) return;
    $$(".filter-chip").forEach((chip) => chip.classList.remove("is-active"));
    button.classList.add("is-active");
    renderProjects(button.dataset.filter);
    updateAllScrollFades();
  });
}

function initLightbox() {
  const lightbox = $("#lightbox");
  const img = $("#lightbox-image");
  const caption = $("#lightbox-caption");

  function close() {
    lightbox.hidden = true;
    img.removeAttribute("src");
    document.body.classList.remove("lightbox-open");
  }

  document.addEventListener("click", (event) => {
    const card = event.target.closest(".cert-card.has-image");
    if (!card) return;
    if (event.target.closest("a.cert-wrap") && !event.target.closest(".cert-media")) return;

    const src = card.dataset.image;
    if (!src) return;
    event.preventDefault();
    img.src = src;
    img.alt = card.dataset.title || "Certificate";
    caption.textContent = card.dataset.title || "";
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
  });

  $("#lightbox-close").addEventListener("click", close);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) close();
  });
}

function initRotator() {
  const el = $("#role-rotator");
  const words = SITE.rotating;
  if (!el || words.length < 2) {
    if (el) el.textContent = words[0] || "software engineering";
    return;
  }

  let index = 0;
  el.textContent = words[0];

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  setInterval(() => {
    el.classList.add("is-out");
    setTimeout(() => {
      index = (index + 1) % words.length;
      el.textContent = words[index];
      el.classList.remove("is-out");
    }, 280);
  }, 2600);
}

function init() {
  renderHero();
  renderAwards();
  renderExperience();
  renderProjectFilters();
  renderProjects();
  renderCertifications();
  renderFooter();
  initNav();
  initTheme();
  initFilters();
  initLightbox();
  initRotator();
  initScrollPanels();
  observeReveals();
}

init();
