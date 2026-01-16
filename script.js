// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 1000,
        once: false,
        offset: 100,
        easing: 'ease-in-out'
    });
});



// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.glass-nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.background = 'rgba(15, 12, 41, 0.95)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 12, 41, 0.7)';
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Portfolio Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio .col');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');

        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter items with animation
        portfolioItems.forEach((item, index) => {
            item.style.animation = 'none';

            setTimeout(() => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    item.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.1}s`;
                } else {
                    item.style.display = 'none';
                }
            }, 10);
        });
    });
});

// Modal image display
function showImage(src) {
    const largeImage = document.getElementById('largeImage');
    if (largeImage) {
        largeImage.src = src;
    }
}

// Calculate and display age
function hitungUmur() {
    const tanggalLahir = new Date(2003, 11, 10); // December 10, 2003
    const sekarang = new Date();

    let umur = sekarang.getFullYear() - tanggalLahir.getFullYear();
    const bulanSekarang = sekarang.getMonth();
    const bulanLahir = tanggalLahir.getMonth();
    const tanggalSekarang = sekarang.getDate();
    const tanggalLahirSekarang = tanggalLahir.getDate();

    if (bulanSekarang < bulanLahir || (bulanSekarang === bulanLahir && tanggalSekarang < tanggalLahirSekarang)) {
        umur--;
    }

    const umurElement = document.getElementById("umur");
    if (umurElement) {
        umurElement.textContent = umur + " tahun";
    }
}

hitungUmur();

// Typing animation for hero section
const text = "Strategic Marketing IT Support, Associate Cloud Engineer, Video Editor & Content Creator!";
let index = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeWriter() {
    const ridloElement = document.querySelector(".ridlo");

    if (!ridloElement) return;

    if (!isDeleting && index <= text.length) {
        ridloElement.innerHTML = text.substring(0, index) + '<span class="cursor">|</span>';
        index++;
        typingSpeed = 100;
    } else if (isDeleting && index >= 0) {
        ridloElement.innerHTML = text.substring(0, index) + '<span class="cursor">|</span>';
        index--;
        typingSpeed = 50;
    }

    if (index === text.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    }

    if (isDeleting && index === 0) {
        isDeleting = false;
        typingSpeed = 500; // Pause before retyping
    }

    setTimeout(typeWriter, typingSpeed);
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const navbarHeight = document.querySelector('.glass-nav').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// Add fade in animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .cursor {
        animation: blink 0.7s infinite;
    }
    
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroGradient = document.querySelector('.hero-gradient');

    if (heroGradient) {
        heroGradient.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// Counter animation for stats (if needed in future)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Add hover effect for cards
document.querySelectorAll('.card, .skill-card, .cert-card').forEach(card => {
    card.addEventListener('mouseenter', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        this.style.setProperty('--mouse-x', `${x}px`);
        this.style.setProperty('--mouse-y', `${y}px`);
    });
});

console.log('Portfolio loaded successfully! 🚀');
