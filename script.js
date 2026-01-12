document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('sliderTrack');
    const slides = document.querySelectorAll('.testimonial-slide');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const pagination = document.getElementById('pagination');

    let currentIndex = 1; // Start from middle slide for better visual

    // Create Pagination Diamonds
    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('star-dot');
        if (i === currentIndex) dot.classList.add('active');
        pagination.appendChild(dot);
    });

    const dots = document.querySelectorAll('.star-dot');

    function updateSlider() {
        const slideWidth = slides[0].offsetWidth + 50; // width + gap
        const containerWidth = document.querySelector('.slider-container').offsetWidth;
        
        // Calculation to keep the active slide in the center
        const offset = (containerWidth / 2) - (slides[0].offsetWidth / 2) - (currentIndex * slideWidth);
        
        track.style.transform = `translateX(${offset}px)`;

        // Update Dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) currentIndex++;
        else currentIndex = 0;
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) currentIndex--;
        else currentIndex = slides.length - 1;
        updateSlider();
    });

    // Handle Window Resize
    window.addEventListener('resize', updateSlider);
    
    // Initial Position
    updateSlider();
});