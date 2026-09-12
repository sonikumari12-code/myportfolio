// =========================================
// MOBILE MENU
// =========================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuBtn.textContent = "✕";
        menuBtn.setAttribute("aria-label", "Close menu");
    } else {
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-label", "Open menu");
    }

});


// =========================================
// CLOSE MOBILE MENU AFTER CLICK
// =========================================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


// =========================================
// CURRENT YEAR
// =========================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// =========================================
// SCROLL REVEAL ANIMATION
// =========================================

const animatedElements = document.querySelectorAll(
    ".section, .project-card, .skill-card"
);

const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach(element => {
    observer.observe(element);
});


// =========================================
// NAVBAR SHADOW ON SCROLL
// =========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(0, 0, 0, 0.06)";

    } else {

        navbar.style.boxShadow = "none";

    }

});