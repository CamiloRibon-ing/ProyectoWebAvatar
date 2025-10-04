// script.js

// ===== PRELOADER =====
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    setTimeout(() => preloader.style.display = "none", 500);
  }
});

// ===== MENU HAMBURGUESA =====
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
      toggle.setAttribute("aria-expanded", nav.classList.contains("active"));
    });

    // Cierra el menú al hacer clic en un link (mobile UX)
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => nav.classList.remove("active"));
    });
  }

  // ===== ANIMACIONES DE ENTRADA (IntersectionObserver) =====
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".amenidad, .fade-up, .fade-left, .fade-right")
    .forEach(el => observer.observe(el));
});
