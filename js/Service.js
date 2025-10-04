// Preloader (si lo usas en todas las páginas)
window.addEventListener("load", () => {
  const pre = document.getElementById("preloader");
  if (pre) pre.style.display = "none";
});

// MENU hamburguesa (accesible)
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      const expanded = nav.classList.contains('active');
      toggle.setAttribute('aria-expanded', expanded);
    });
  }

  // INTERSECTION OBSERVER para efectos de entrada (fade-up) y para mostrar cada timeline-item
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  // observar tarjetas y nodos del timeline
  document.querySelectorAll('.fade-up, .timeline-item').forEach(el => observer.observe(el));
});
