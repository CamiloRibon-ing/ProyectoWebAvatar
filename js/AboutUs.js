// script.js - Preloader, menu, scroll reveal


  // ==== PRELOADER ====
  window.addEventListener('load', () => {
    const pre = document.getElementById('preloader');
    if (pre) {
      pre.classList.add('hidden');
      setTimeout(() => pre.remove(), 700);
    }
  });



document.addEventListener("DOMContentLoaded", () => {
  /* ==== Menú hamburguesa ==== */
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.setAttribute(
        "aria-expanded",
        navLinks.classList.contains("active")
      );
    });
    
  }

  /* ==== Animaciones scroll (laterales + fade-up) ==== */
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".fade-up, .fade-left, .fade-right")
    .forEach((el) => observer.observe(el));
});
