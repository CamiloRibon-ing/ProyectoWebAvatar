// ===== PRELOADER =====
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    setTimeout(() => preloader.style.display = "none", 600);
  }
});

// ===== NAVBAR MENU =====
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
if (toggle) {
  toggle.addEventListener("click", () => navLinks.classList.toggle("active"));
}

// ===== EFECTO DE DESENFOQUE EN VIDEO =====
const heroVideo = document.getElementById("heroVideo");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (scrollY > 100) heroVideo.classList.add("blur");
  else heroVideo.classList.remove("blur");
});

// ===== ANIMACIONES DE ENTRADA =====
const fadeElements = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.2 });
fadeElements.forEach(el => observer.observe(el));

// ===== CARRUSEL AUTOMÁTICO =====
const carousel = document.getElementById("empresasCarousel");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let scrollInterval;

function autoScroll() {
  if (carousel) {
    carousel.scrollBy({ left: 300, behavior: "smooth" });
    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
      carousel.scrollTo({ left: 0, behavior: "smooth" });
    }
  }
}

if (carousel) {
  scrollInterval = setInterval(autoScroll, 3000);

  // Pausar al pasar el mouse
  carousel.addEventListener("mouseenter", () => clearInterval(scrollInterval));
  carousel.addEventListener("mouseleave", () => {
    scrollInterval = setInterval(autoScroll, 3000);
  });
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => carousel.scrollBy({ left: -300, behavior: "smooth" }));
  nextBtn.addEventListener("click", () => carousel.scrollBy({ left: 300, behavior: "smooth" }));
}
