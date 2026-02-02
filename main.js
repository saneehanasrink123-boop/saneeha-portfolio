document.addEventListener('DOMContentLoaded', () => {
    // Reveal on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Elements to reveal
    const revealElements = document.querySelectorAll('.hero-content > *, .hero-visual, section, .split-card, .project-card, .process-step');
    revealElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // Staggered reveal for skills
    const skillZones = document.querySelectorAll('.expertise-zone');
    skillZones.forEach(zone => {
        const cards = zone.querySelectorAll('.skill-card');
        const zoneObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('active');
                        }, index * 150);
                    });
                }
            });
        }, { threshold: 0.2 });
        zoneObserver.observe(zone);
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 11, 0.95)';
            navbar.style.height = '70px';
            navbar.style.borderBottomColor = 'rgba(139, 92, 246, 0.2)';
        } else {
            navbar.style.background = 'rgba(10, 10, 11, 0.8)';
            navbar.style.height = 'var(--nav-height)';
            navbar.style.borderBottomColor = 'var(--glass-border)';
        }
    });
});
