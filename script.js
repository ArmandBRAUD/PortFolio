// Un objet pour stocker l'index courant de chaque slider
const sliderIndexes = {};

// Fonction pour mettre à jour la position du slider
function updateSlidePosition(sliderId) {
    const slider = document.querySelector(`#${sliderId}`);
    const sliderContainer = slider.querySelector('.slider-container');
    const slides = slider.querySelectorAll('.slide');
    const slideWidth = slides[0].clientWidth;

    sliderContainer.style.transform = `translateX(-${sliderIndexes[sliderId] * slideWidth}px)`;
}

// Fonction pour passer à la diapositive suivante
function nextSlide(sliderId) {
    const slider = document.querySelector(`#${sliderId}`);
    const slides = slider.querySelectorAll('.slide');

    if (sliderIndexes[sliderId] === undefined) {
        sliderIndexes[sliderId] = 0; // Initialise l'index si ce n'est pas fait
    }

    sliderIndexes[sliderId] = (sliderIndexes[sliderId] + 1) % slides.length;
    updateSlidePosition(sliderId);
}

// Fonction pour revenir à la diapositive précédente
function prevSlide(sliderId) {
    const slider = document.querySelector(`#${sliderId}`);
    const slides = slider.querySelectorAll('.slide');

    if (sliderIndexes[sliderId] === undefined) {
        sliderIndexes[sliderId] = 0; // Initialise l'index si ce n'est pas fait
    }

    sliderIndexes[sliderId] =
        (sliderIndexes[sliderId] - 1 + slides.length) % slides.length;
    updateSlidePosition(sliderId);
}

// Ajuster la position sur le redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    Object.keys(sliderIndexes).forEach(updateSlidePosition);
});

