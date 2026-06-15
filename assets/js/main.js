// JavaScript interactions for Keerikattu Jewellery

document.addEventListener('DOMContentLoaded', () => {
    // 1. Hero Image Parallax Effect
    const heroSection = document.querySelector('section');
    const heroImg = document.querySelector('section img');
    
    if (heroSection && heroImg) {
        // Apply slight scale to the hero image initially so parallax doesn't show white gaps
        heroImg.classList.add('scale-105', 'transition-transform', 'duration-[100ms]', 'ease-out');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const sectionHeight = heroSection.offsetHeight;
            
            // Only apply parallax while the hero is visible on screen
            if (scrolled <= sectionHeight) {
                // translate image down slightly as we scroll down
                heroImg.style.transform = `scale(1.05) translateY(${scrolled * 0.15}px)`;
            }
        });
    }

    // 2. Navigation Bar Scroll Transition
    const navbar = document.querySelector('nav');
    if (navbar) {
        // Initial state
        navbar.classList.remove('bg-surface/80', 'backdrop-blur-md', 'border-primary/30');
        navbar.classList.add('bg-transparent', 'border-transparent', 'transition-all', 'duration-500');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-surface/90', 'backdrop-blur-md', 'border-primary/30');
                navbar.classList.remove('bg-transparent', 'border-transparent');
            } else {
                navbar.classList.remove('bg-surface/90', 'backdrop-blur-md', 'border-primary/30');
                navbar.classList.add('bg-transparent', 'border-transparent');
            }
        });
    }

    // 3. Carousel Button Navigation
    const carousel = document.querySelector('.snap-x');
    const prevBtn = document.querySelector('button:has(span:contains("chevron_left"))') || document.querySelectorAll('button')[0];
    const nextBtn = document.querySelector('button:has(span:contains("chevron_right"))') || document.querySelectorAll('button')[1];

    if (carousel) {
        // Find chevron buttons
        const buttons = document.querySelectorAll('main button');
        let leftBtn = null;
        let rightBtn = null;
        buttons.forEach(btn => {
            const icon = btn.querySelector('.material-symbols-outlined');
            if (icon) {
                if (icon.textContent === 'chevron_left') leftBtn = btn;
                if (icon.textContent === 'chevron_right') rightBtn = btn;
            }
        });

        if (leftBtn && rightBtn) {
            leftBtn.addEventListener('click', () => {
                carousel.scrollBy({ left: -382, behavior: 'smooth' }); // Card width + gap
            });
            rightBtn.addEventListener('click', () => {
                carousel.scrollBy({ left: 382, behavior: 'smooth' });
            });
        }
    }
});
