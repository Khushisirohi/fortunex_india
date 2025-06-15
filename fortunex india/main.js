document.addEventListener("DOMContentLoaded", () => {
    const scrollButtons = document.querySelectorAll(".navbar a");
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    // Smooth scroll for nav links
    scrollButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const targetSection = document.querySelector(button.getAttribute("href"));

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

            // Close mobile menu after clicking
            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
            }
        });
    });

    // Hamburger menu toggle
    mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
