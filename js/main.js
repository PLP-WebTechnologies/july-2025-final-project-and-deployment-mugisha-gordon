// Navigation functionality
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Show mobile menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('active');
    });
}

// Hide mobile menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Change navbar style on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.padding = '10px 0';
        navbar.style.backgroundColor = 'var(--secondary)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.backgroundColor = 'rgba(26, 83, 92, 0.95)';
    }
});

// Animated counter for statistics
const counters = document.querySelectorAll('.stat h3');
const speed = 200;

const startCounter = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = Math.ceil(target / speed);
        
        if (count < target) {
            counter.innerText = Math.min(count + increment, target);
            setTimeout(() => startCounter(), 1);
        }
    });
};

// Start counter when statistics section is in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounter();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.statistics');
if (statsSection) {
    observer.observe(statsSection);
}

// Form validation for newsletter
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (validateEmail(email)) {
            // Simulate form submission
            newsletterForm.innerHTML = '<p class="success-message">Thank you for subscribing!</p>';
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Initialize when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Any additional initialization code
});