// script.js - Preloader, menu, scroll reveal
document.addEventListener('DOMContentLoaded', () => {

  // ==== PRELOADER ====
  window.addEventListener('load', () => {
    const pre = document.getElementById('preloader');
    if (pre) {
      pre.classList.add('hidden');
      setTimeout(() => pre.remove(), 700);
    }
  });

  // ==== MENU HAMBURGUESA ====
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      const expanded = nav.classList.contains('active');
      toggle.setAttribute('aria-expanded', expanded);
    });

    // cerrar menú al hacer click en un link (móvil)
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        toggle.setAttribute('aria-expanded', false);
      });
    });
  }

  // ==== SCROLL REVEAL ====
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');

        // Animación escalonada para project-cards
        if (entry.target.classList.contains('project-card')) {
          entry.target.style.transitionDelay = `${index * 120}ms`;
        }

        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  // observar todos los elementos animables
  document.querySelectorAll('.fade-up, .fade-left, .fade-right, .project-card')
    .forEach(el => io.observe(el));

  // ==== HERO VIDEO autoplay seguro ====
  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    heroVideo.play().catch(() => {
      document.addEventListener('click', () => heroVideo.play(), { once: true });
    });
  }

});


// Animaciones del timeline
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  items.forEach(el => observer.observe(el));
});
