// ==========================
// Плавкое появление секций
// ==========================

const elements = document.querySelectorAll(
    "section, .service, .review, .stat, .gallery img"
);

elements.forEach(el => {
    el.classList.add("hidden");
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

elements.forEach(el => observer.observe(el));


// ==========================
// Плавная прокрутка меню
// ==========================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        const href = this.getAttribute('href');

        if (href.startsWith("#")) {

            e.preventDefault();

            document.querySelector(href).scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ==========================
// Активный пункт меню
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});