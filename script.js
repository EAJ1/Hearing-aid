// Enhanced animations for hero section
document.addEventListener('DOMContentLoaded', () => {
    // Add entrance animations with delays
    const heroElements = [
        { selector: '.hero-text h2', delay: 0.2 },
        { selector: '.hero-text p', delay: 0.8 },
        { selector: '.hero-features', delay: 1.4 },
        { selector: '.cta-button', delay: 2.0 },
        { selector: '.hero-image', delay: 0.5 }
    ];

    heroElements.forEach(({ selector, delay }) => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(50px)';
            element.style.transition = 'all 1s ease-out';

            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, delay * 1000);
        }
    });

    // Mouse parallax effect for background
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        const hero = document.querySelector('.hero');
        if (hero) {
            const xOffset = (mouseX - 0.5) * 20;
            const yOffset = (mouseY - 0.5) * 20;
            hero.style.backgroundPosition = `${50 + xOffset}% ${50 + yOffset}%`;
        }
    });

    // Interactive sound waves
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.addEventListener('mouseenter', () => {
            const waves = heroImage.querySelectorAll('.wave');
            waves.forEach((wave, index) => {
                wave.style.animationDuration = '0.8s';
                wave.style.animationDelay = `${index * 0.1}s`;
            });
        });

        heroImage.addEventListener('mouseleave', () => {
            const waves = heroImage.querySelectorAll('.wave');
            waves.forEach((wave, index) => {
                wave.style.animationDuration = '2s';
                wave.style.animationDelay = `${index * 0.5}s`;
            });
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});



// Floating elements animation
const floatingElements = document.querySelectorAll('.floating-circle');
floatingElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 2}s`;
});

// Mouse movement parallax for floating elements
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    floatingElements.forEach((element, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        element.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Product card hover effects
document.querySelectorAll('.product-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px) scale(1.02)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// Dynamic background gradient based on scroll
window.addEventListener('scroll', () => {
    const scrollPercent = window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
    const hue = scrollPercent * 360;
    document.body.style.background = `linear-gradient(135deg, hsl(${hue}, 70%, 30%) 0%, hsl(${hue + 60}, 70%, 40%) 50%, hsl(${hue + 120}, 70%, 50%) 100%)`;
});

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
