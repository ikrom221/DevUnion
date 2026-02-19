// Mobil menyu (Hamburger)
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Scroll paytida navigatsiya linklarini yangilash
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    
    // Scroll bo'lganda mobil menyuni yopish
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// Typing Animatsiyasi
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Jamoasi', 'UI/UX Dizaynerlar', 'Full-Stack Team', 'AI Specialists'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true
});