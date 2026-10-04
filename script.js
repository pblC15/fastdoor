/* =========================================================
   ✏️ CONFIGURAÇÃO — números de WhatsApp e mensagens
   Formato: indicativo do país + número, sem "+" nem espaços.
   ========================================================= */
const WHATSAPP = {
  1: "351916763980",
  2: "351916010808",
};
const MENSAGENS = {
  padrao: "Olá FastDoor! Gostaria de pedir um orçamento.",
  urgencia: "Olá FastDoor! Preciso de assistência técnica para o meu portão.",
};

/* --------- Não é preciso mexer abaixo desta linha --------- */

// Links de WhatsApp
document.querySelectorAll("[data-wa]").forEach((link) => {
  const numero = WHATSAPP[link.dataset.wa] || WHATSAPP[1];
  const texto = MENSAGENS[link.dataset.msg] || MENSAGENS.padrao;
  link.href = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
});

// O portão abre quando aparece no ecrã
const garage = document.querySelector(".garage");
if (garage) {
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        garage.classList.add("is-open");
        io.disconnect();
      }
    }, { threshold: 0.35 });
    io.observe(garage);
  } else {
    garage.classList.add("is-open");
  }
}

// Ano no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// Setas da galeria
const gallery = document.getElementById("gallery");
document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const step = gallery.querySelector("li").offsetWidth + 16;
    gallery.scrollBy({ left: step * Number(btn.dataset.scroll), behavior: "smooth" });
  });
});

// Visualizador de fotos
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lightbox-img");
const lbCap = document.getElementById("lightbox-cap");
const shots = [...document.querySelectorAll(".shot")];
let atual = 0;

function mostrar(i) {
  atual = (i + shots.length) % shots.length;
  const img = shots[atual].querySelector("img");
  lbImg.src = img.src;
  lbImg.alt = img.alt;
  lbCap.textContent = shots[atual].querySelector("span").textContent;
}

if (typeof lightbox.showModal === "function") {
  shots.forEach((shot, i) => {
    shot.addEventListener("click", () => {
      mostrar(i);
      lightbox.showModal();
    });
  });
  lightbox.querySelector(".lightbox__close").addEventListener("click", () => lightbox.close());
  lightbox.querySelector(".lightbox__nav--prev").addEventListener("click", () => mostrar(atual - 1));
  lightbox.querySelector(".lightbox__nav--next").addEventListener("click", () => mostrar(atual + 1));
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) lightbox.close(); });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.open) return;
    if (e.key === "ArrowLeft") mostrar(atual - 1);
    if (e.key === "ArrowRight") mostrar(atual + 1);
  });
}
