let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slides img');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Cambia la imagen cada 3 segundos
}

function moveSlide(n) {
    const slides = document.querySelectorAll('.slides img');
    slides[slideIndex - 1].style.display = "none";
    slideIndex += n;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    slides[slideIndex - 1].style.display = "block";
}

document.addEventListener('DOMContentLoaded', showSlides);
