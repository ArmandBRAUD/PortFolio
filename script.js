document.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelectorAll('.skill-progress');
    
    skills.forEach(skill => {
        const skillPercentage = skill.getAttribute('data-skill');
        skill.style.width = '0%';  // Initialiser la largeur à 0%
        
        // Animation de la jauge
        setTimeout(() => {
            skill.style.width = skillPercentage + '%';
            skill.textContent = skillPercentage + '%'; // Afficher le pourcentage dans la jauge
        }, 300);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.image-item');
    const totalImages = images.length;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    document.getElementById('prev').addEventListener('click', function () {
        currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : totalImages - 1;
        showImage(currentImageIndex);
    });

    document.getElementById('next').addEventListener('click', function () {
        currentImageIndex = (currentImageIndex < totalImages - 1) ? currentImageIndex + 1 : 0;
        showImage(currentImageIndex);
    });

    // Afficher la première image par défaut
    showImage(currentImageIndex);
});
