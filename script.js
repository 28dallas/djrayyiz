// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const mobileMenu = document.createElement('div');
mobileMenu.classList.add('mobile-menu');
mobileMenu.innerHTML = navLinks.outerHTML;
document.body.appendChild(mobileMenu);

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

mobileMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        mobileMenu.classList.remove('active');
    }
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
});

// Fade in sections on scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

// Lightbox for gallery
const galleryImages = document.querySelectorAll('.gallery-grid img');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.innerHTML = `
    <div class="lightbox-content">
        <span class="close">&times;</span>
        <img id="lightbox-img" src="" alt="">
    </div>
`;
document.body.appendChild(lightbox);

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
    });
});

document.querySelector('.close').addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const mobileMenu = document.createElement('div');
    mobileMenu.classList.add('mobile-menu');
    mobileMenu.innerHTML = navLinks.outerHTML;
    document.body.appendChild(mobileMenu);

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    mobileMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            mobileMenu.classList.remove('active');
        }
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        }
    });

    // Fade in sections on scroll
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Lightbox for gallery
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="close">&times;</span>
            <img id="lightbox-img" src="" alt="">
        </div>
    `;
    document.body.appendChild(lightbox);

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            const lightboxImg = document.getElementById('lightbox-img');
            lightboxImg.src = img.src;
            lightbox.style.display = 'flex';
        });
    });

    document.querySelector('.close').addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Video thumbnail click to load iframe
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');
    videoThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const videoId = thumbnail.getAttribute('data-video-id');
            const iframe = document.createElement('iframe');
            iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allowfullscreen', '');
            iframe.style.width = '100%';
            iframe.style.height = '350px';
            thumbnail.parentNode.replaceChild(iframe, thumbnail);
        });
    });

    // Form validation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const subject = contactForm.subject.value.trim();
        const message = contactForm.message.value.trim();

        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Please enter a valid email.');
            return;
        }

        alert('Message sent successfully!');
        contactForm.reset();
    });
});
