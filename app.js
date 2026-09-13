// ================= NAVBAR SMOOTH SCROLL START =====================

document.querySelectorAll('header a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});
// ================= NAVBAR SMOOTH SCROLL END =====================

// ==================== HOME SECTION START =====================

const typingText = document.querySelector("#home h2");

const text = "Web Developer";
let index = 0;

function typeText() {
    if (index < text.length) {
        typingText.innerHTML =
            text.substring(0, index + 1) +
            ' <span class="text-purple-500">|</span>';

        index++;

        setTimeout(typeText, 120);
    }
}

if (typingText) {
    typingText.innerHTML = '<span class="text-purple-500">|</span>';
    typeText();
}


// View My Work Button
const workButton = document.querySelector('#home a[href="#projects"]');

if (workButton) {
    workButton.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector("#projects").scrollIntoView({
            behavior: "smooth"
        });
    });
}


// Contact Me Button
const contactButton = document.querySelector('#home a[href="#contact"]');

if (contactButton) {
    contactButton.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector("#contact").scrollIntoView({
            behavior: "smooth"
        });
    });
}
// ==================== HOME SECTION END =====================

// ===================== SKILLS SECTION START =====================

const skillCards = document.querySelectorAll("#skills .skill-card");

skillCards.forEach(card => {

    card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-5px)";
    });

    card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
    });

});


// View All Skills Button
const skillsButton = document.querySelector("#skills button");

if (skillsButton) {

    skillsButton.addEventListener("click", function () {

        skillCards.forEach(card => {
            card.style.display = "block";
        });

        this.textContent = "All Skills Shown";

    });

}
// ===================== SKILLS SECTION END =====================

// ==================== SERVICES SECTION START ======================

const serviceCards = document.querySelectorAll("#services .grid > div");

serviceCards.forEach(card => {

    card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
    });

});


// What I Do Button
const servicesButton = document.querySelector("#services button");

if (servicesButton) {

    servicesButton.addEventListener("click", function () {

        serviceCards.forEach(card => {
            card.style.transform = "translateY(-5px)";

            setTimeout(() => {
                card.style.transform = "translateY(0)";
            }, 500);
        });

    });

}
// ==================== SERVICES SECTION END ======================

// ==================== PROJECTS SECTION START ==================

const projectCards = document.querySelectorAll("#projects .group");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
    });

});


// View All Projects Button
const projectsButton = document.querySelector('#projects a[href="#"]');

if (projectsButton) {

    projectsButton.addEventListener("click", function (e) {
        e.preventDefault();

        projectCards.forEach(card => {
            card.style.display = "block";
        });

        this.textContent = "All Projects Shown";
    });

}

// ==================== PROJECTS SECTION END ==================

// ================= CONTACT SECTION START ====================

const contactForm = document.querySelector("#contact form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
        const message = contactForm.querySelector("textarea").value;

        if (name === "" || email === "" || subject === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        alert("Thank you! Your message has been sent successfully.");

        contactForm.reset();

    });

}
// ================= CONTACT SECTION END ====================

// ================= FOOTER SECTION STAR ======================

// Back To Top
const backToTop = document.querySelector('footer a[href="#home"]');

if (backToTop) {

    backToTop.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector("#home").scrollIntoView({
            behavior: "smooth"
        });
    });

}


// Footer Navigation
document.querySelectorAll("footer nav a").forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Current Year
const yearText = document.querySelector("footer p <br>");

if (yearText) {
    yearText.innerHTML =
        `© ${new Date().getFullYear()} Madiha Khan. All rights reserved.`;
}
// ================= FOOTER SECTION STAR ======================