/* ============================================================
   NÔNG NGHIỆP SỐ PHÙ CÁT — script.js
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ----------- Sticky nav shrink on scroll ----------- */
  const nav = document.querySelector(".nav");
  const onScroll = () => {
    if (window.scrollY > 40) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ----------- Mobile menu toggle ----------- */
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.querySelector(".nav__menu");
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    menu.classList.toggle("open");
  });
  // Close on link click
  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      toggle.classList.remove("open");
      menu.classList.remove("open");
    });
  });

  /* ----------- Reveal on scroll ----------- */
  const revealTargets = document.querySelectorAll(
    ".section__head, .breed, .process__step, .author, .result, .video, .quote, .contact"
  );
  revealTargets.forEach(el => el.classList.add("reveal"));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -80px 0px" });

  revealTargets.forEach(el => io.observe(el));

  /* ----------- Stagger reveal for breed cards ----------- */
  document.querySelectorAll(".breed").forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.12}s`;
  });
  document.querySelectorAll(".process__step").forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.1}s`;
  });
  document.querySelectorAll(".author").forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.05}s`;
  });

  /* ----------- QR Code generation ----------- */
  // Use the actual page URL (works once deployed to Vercel)
  const qrImg = document.getElementById("qrCode");
  if (qrImg) {
    const url = window.location.href.split("#")[0]; // strip hash
    // Free QR Server API – generates a QR PNG client-side without any key
    const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=8&data=${encodeURIComponent(url)}`;
    qrImg.src = qrSrc;
  }

  /* ----------- Active nav highlight ----------- */
  const sections = document.querySelectorAll("section[id], header[id]");
  const navLinks = document.querySelectorAll(".nav__menu a");

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.style.color = "";
          if (link.getAttribute("href") === `#${id}`) {
            link.style.color = "var(--gold-700)";
          }
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => sectionObserver.observe(s));
});
