// Initialize and apply saved theme immediately to prevent layout flashing
(function () {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
})();

// Initialize AOS (Animate On Scroll) and Theme/Contact handlers
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 1000,
        once: false,
        offset: 100,
        easing: 'ease-in-out'
    });

    // Theme Toggle Logic
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

    function updateThemeIcon(theme) {
        if (!themeIcon) return;
        if (theme === 'light') {
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }
    }

    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    updateThemeIcon(currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const newTheme = activeTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.glass-nav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Scroll Fade-out Hero Indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.style.transition = 'opacity 0.3s ease';
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        });
    }

    // Skill Progress Bars Viewport Intersection Observer
    if ('IntersectionObserver' in window) {
        const progressObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const fill = entry.target;
                    const targetWidth = fill.getAttribute('data-progress') || '0%';
                    fill.style.width = targetWidth;
                    observer.unobserve(fill);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.skill-progress-fill').forEach(fill => {
            progressObserver.observe(fill);
        });
    } else {
        document.querySelectorAll('.skill-progress-fill').forEach(fill => {
            fill.style.width = fill.getAttribute('data-progress') || '0%';
        });
    }

    // Contact Form Mock Submission Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalContent = submitBtn.innerHTML;

            // Show sending state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Mengirim...';

            setTimeout(() => {
                // Restore button state
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalContent;

                // Show success feedback
                showToast('Pesan Anda berhasil dikirim! Terima kasih telah menghubungi saya. Saya akan merespons secepatnya.', 'success');
                contactForm.reset();
            }, 1200);
        });
    }
});

// Portfolio Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.fotografi, .website, .video');

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
                    item.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.05}s`;
                } else {
                    item.style.display = 'none';
                }
            }, 10);
        });
    });
});

// Modal project details and image display
function showProjectDetails(src, title, desc, techArray, demoLink, githubLink) {
    const projectModalImg = document.getElementById('projectModalImg');
    if (projectModalImg) {
        projectModalImg.src = src;
    }
    const projectModalTitle = document.getElementById('projectModalTitle');
    if (projectModalTitle) {
        projectModalTitle.textContent = title || 'Proyek Portofolio';
    }
    const projectModalDesc = document.getElementById('projectModalDesc');
    if (projectModalDesc) {
        projectModalDesc.textContent = desc || '';
    }

    const techList = document.getElementById('projectModalTechList');
    if (techList) {
        techList.innerHTML = '';
        if (techArray && techArray.length > 0) {
            techArray.forEach(tech => {
                const badge = document.createElement('span');
                badge.className = 'badge glass-badge';
                badge.textContent = tech;
                techList.appendChild(badge);
            });
            const techSection = document.getElementById('projectModalTechSection');
            if (techSection) techSection.style.display = 'block';
        } else {
            const techSection = document.getElementById('projectModalTechSection');
            if (techSection) techSection.style.display = 'none';
        }
    }

    const demoBtn = document.getElementById('projectModalDemoLink');
    const codeBtn = document.getElementById('projectModalCodeLink');
    const actionsContainer = document.getElementById('projectModalActions');

    if (demoBtn) {
        if (demoLink) {
            demoBtn.href = demoLink;
            demoBtn.style.display = 'inline-flex';
        } else {
            demoBtn.style.display = 'none';
        }
    }

    if (codeBtn) {
        if (githubLink) {
            codeBtn.href = githubLink;
            codeBtn.style.display = 'inline-flex';
        } else {
            codeBtn.style.display = 'none';
        }
    }

    if (actionsContainer) {
        if (!demoLink && !githubLink) {
            actionsContainer.style.display = 'none';
        } else {
            actionsContainer.style.display = 'flex';
        }
    }
}

function showImage(src, title, description) {
    showProjectDetails(src, title, description, [], '', '');
}

// Toast Notification Helper
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `custom-toast custom-toast-${type}`;

    const iconClass = type === 'success' ? 'fas fa-check' : 'fas fa-exclamation-triangle';

    toast.innerHTML = `
        <div class="custom-toast-icon">
            <i class="${iconClass}"></i>
        </div>
        <div class="custom-toast-message">${message}</div>
    `;

    container.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    // Remove toast after duration
    setTimeout(() => {
        toast.classList.remove('show');
        const handleTransitionEnd = () => {
            toast.remove();
            toast.removeEventListener('transitionend', handleTransitionEnd);
        };
        toast.addEventListener('transitionend', handleTransitionEnd);
    }, 4000);
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
const text = "Backend Development Enthusiast, Business Development IT Support, Certified Google Associate Cloud Engineer, & Creative Multimedia!";
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

// Scroll Progress and Circular Back to Top progress updates
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolledPercent = winScroll / height;

    const scrollBar = document.getElementById("scrollBar");
    if (scrollBar) {
        scrollBar.style.width = (scrolledPercent * 100) + "%";
    }

    const circle = document.querySelector('.progress-svg circle');
    if (circle) {
        // stroke-dasharray is 151
        const offset = 151 - (scrolledPercent * 151);
        circle.style.strokeDashoffset = Math.max(0, Math.min(151, offset));
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

// Mouse coordinate tracking for spotlight effects in all sections
document.querySelectorAll('.card, .portfolio-card, .cert-card, .skill-category-card, .timeline-item .content, .glass-panel').forEach(el => {
    el.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        this.style.setProperty('--mouse-x', `${x}px`);
        this.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Add 3D Tilt Hover effect for cards
document.querySelectorAll('.card, .portfolio-card, .cert-card').forEach(card => {
    card.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Tilt values (max 10 degrees)
        const rotateX = ((centerY - y) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * 10;

        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        this.style.transition = 'transform 0.5s ease';
    });

    card.addEventListener('mouseenter', function () {
        this.style.transition = 'none';
    });
});

console.log('Portfolio loaded successfully! 🚀');

// Back to Top Button Logic (Circular Progress Wrapper)
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Active Navbar Link highlight on Scroll
const sectionsList = document.querySelectorAll('section, footer');
const navLinksList = document.querySelectorAll('.glass-nav .nav-link');

if (sectionsList.length > 0 && navLinksList.length > 0) {
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const navbarHeight = document.querySelector('.glass-nav').offsetHeight;

        sectionsList.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinksList.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
}

// Click to Copy Email function with custom toast notification
function copyEmailToClipboard(element) {
    const emailText = "akhmadd432@gmail.com";
    navigator.clipboard.writeText(emailText).then(() => {
        showToast('Alamat email berhasil disalin ke clipboard!', 'success');
    }).catch(err => {
        showToast('Gagal menyalin email. Silakan salin secara manual.', 'warning');
    });
}
