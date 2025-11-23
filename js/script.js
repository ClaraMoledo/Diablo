// FADE-IN AO CARREGAR
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
});

// --------------------------
// CARROSSEL
// --------------------------
const slidesContainer = document.querySelector(".slides");
const imagensCarrossel = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const bolinhasContainer = document.querySelector(".bolinhas");

let index = 0;

// Criar bolinhas
imagensCarrossel.forEach((_, i) => {
    const bola = document.createElement("span");
    bola.addEventListener("click", () => {
        index = i;
        atualizarCarrossel();
    });
    bolinhasContainer.appendChild(bola);
});

const bolinhas = document.querySelectorAll(".bolinhas span");

function atualizarCarrossel() {
    slidesContainer.style.transform = `translateX(${-index * 100}%)`;
    bolinhas.forEach(b => b.classList.remove("active"));
    bolinhas[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    index = (index + 1) % imagensCarrossel.length;
    atualizarCarrossel();
});

prevBtn.addEventListener("click", () => {
    index = (index - 1 + imagensCarrossel.length) % imagensCarrossel.length;
    atualizarCarrossel();
});

// Auto-slide
setInterval(() => {
    index = (index + 1) % imagensCarrossel.length;
    atualizarCarrossel();
}, 4000);

atualizarCarrossel();
