/* ============================================================
   NÔNG NGHIỆP SỐ PHÙ CÁT — Multi-page SPA
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ----------- Page navigation logic ----------- */
  const pages = document.querySelectorAll(".page");
  const links = document.querySelectorAll("[data-link]");
  const overlay = document.querySelector(".page-transition");
  const navLinks = document.querySelectorAll(".nav__menu a");

  function showPage(pageId, updateHistory = true) {
    const target = document.querySelector(`[data-page="${pageId}"]`);
    if (!target) return;

    // Trigger transition overlay
    overlay.classList.add("active");

    setTimeout(() => {
      // Hide all pages
      pages.forEach(p => p.classList.remove("page--active"));
      // Show target
      target.classList.add("page--active");

      // Update active state in nav
      navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href === `#${pageId}`) link.classList.add("active");
        else link.classList.remove("active");
      });

      // Scroll to top instantly
      window.scrollTo({ top: 0, behavior: "instant" });

      // Update URL hash
      if (updateHistory) {
        history.pushState({ page: pageId }, "", `#${pageId}`);
      }

      // Hide overlay
      setTimeout(() => overlay.classList.remove("active"), 50);

      // Pause any video on inactive pages
      document.querySelectorAll("video").forEach(v => {
        if (!v.closest(".page--active")) v.pause();
      });
    }, 250);
  }

  // Handle link clicks
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const pageId = href.substring(1);
        showPage(pageId);

        // Close mobile menu if open
        toggle.classList.remove("open");
        menu.classList.remove("open");
      }
    });
  });

  // Handle browser back/forward
  window.addEventListener("popstate", (e) => {
    const pageId = window.location.hash.substring(1) || "trang-chu";
    showPage(pageId, false);
  });

  // Handle initial page from URL
  const initialPage = window.location.hash.substring(1) || "trang-chu";
  if (initialPage !== "trang-chu") {
    // Show without animation on first load
    pages.forEach(p => p.classList.remove("page--active"));
    const target = document.querySelector(`[data-page="${initialPage}"]`);
    if (target) {
      target.classList.add("page--active");
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${initialPage}`);
      });
    } else {
      document.querySelector('[data-page="trang-chu"]').classList.add("page--active");
    }
  }

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

  /* ----------- QR Code generation ----------- */
  const qrImg = document.getElementById("qrCode");
  if (qrImg) {
    const url = window.location.href.split("#")[0];
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=8&data=${encodeURIComponent(url)}`;
  }

  /* ----------- Paper image lightbox ----------- */
  const paperFrame = document.querySelector(".paper__frame");
  if (paperFrame) {
    paperFrame.addEventListener("click", () => {
      const img = paperFrame.querySelector("img");
      if (!img) return;
      const lb = document.createElement("div");
      lb.style.cssText = `
        position:fixed;inset:0;background:rgba(3,4,94,0.92);
        display:grid;place-items:center;z-index:9999;cursor:zoom-out;
        padding:2rem;animation:fadeIn 0.3s ease;
      `;
      const big = document.createElement("img");
      big.src = img.src;
      big.style.cssText = `max-width:100%;max-height:100%;border-radius:6px;box-shadow:0 30px 80px rgba(0,0,0,0.5);`;
      lb.appendChild(big);
      lb.addEventListener("click", () => lb.remove());
      document.body.appendChild(lb);
    });
  }
});
