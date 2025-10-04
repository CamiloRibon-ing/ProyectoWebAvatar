// =======================
// PRELOADER (opcional)
// =======================
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// =======================
// MENÚ HAMBURGUESA
// =======================
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// =======================
// EFECTO FADE-UP AL HACER SCROLL
// =======================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));

// =======================
// EMAILJS CONFIGURACIÓN
// =======================
(function() {
  // ⚠️ Reemplaza con tu PUBLIC KEY (desde tu panel de EmailJS)
  emailjs.init("pottjLgBxgFrjaR1Y"); 
})();

// =======================
// ENVÍO DEL FORMULARIO
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const alertBox = document.createElement("div");
  alertBox.id = "alert-box";
  document.body.appendChild(alertBox);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      showAlert("Por favor, completa todos los campos obligatorios.", "error");
      return;
    }

    const submitBtn = form.querySelector("button[type='submit']");
    submitBtn.disabled = true;
    submitBtn.innerHTML = "<i class='fas fa-spinner fa-spin'></i> Enviando...";

    // ✅ Envía usando tu TEMPLATE correcto
    emailjs.sendForm("service_t6ltd7g", "template_51h6ncn", form)
      .then(() => {
        showAlert("✅ ¡Tu mensaje fue enviado con éxito!", "success");
        form.reset();
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
        showAlert("❌ Ocurrió un error al enviar el mensaje. Intenta nuevamente.", "error");
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = "<i class='fas fa-paper-plane'></i> Enviar mensaje";
      });
  });

  // =======================
  // ALERTA ELEGANTE
  // =======================
  function showAlert(message, type) {
    alertBox.textContent = message;
    alertBox.className = `alert-box ${type} show`;
    setTimeout(() => alertBox.classList.remove("show"), 4000);
  }
});
