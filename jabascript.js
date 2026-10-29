"use strict";

// =====================================
// EmailJS Configuration
// =====================================

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (typeof emailjs !== "undefined") {
    emailjs.init({
        publicKey: "SALaAMmeRehcHa3sK",
    });
}

if (form && formMessage) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (typeof emailjs === "undefined") {
            formMessage.textContent =
                "Email service is unavailable. Please try again later.";
            return;
        }

        const submitButton = form.querySelector(
            'button[type="submit"]'
        );

        formMessage.textContent = "Sending your message...";
        formMessage.style.display = "block";
        formMessage.style.backgroundColor = "#eff6ff";
        formMessage.style.color = "#1d4ed8";

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";
        }

        emailjs.sendForm(
            "service_5d305ji",
            "template_9alilmq",
            form
        ).then(function () {
            formMessage.textContent =
                "Thank you! Your message has been sent successfully.";

            formMessage.style.backgroundColor = "#dcfce7";
            formMessage.style.color = "#166534";

            form.reset();
        }).catch(function (error) {
            console.error("EmailJS error:", error);

            formMessage.textContent =
                "Sorry, your message could not be sent. Please try again.";

            formMessage.style.backgroundColor = "#fee2e2";
            formMessage.style.color = "#991b1b";
        }).finally(function () {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = "Send Message";
            }
        });
    });
}

// =====================================
// Back to Top Button
// =====================================

const backToTop = document.getElementById("backToTop");

if (backToTop) {
    function updateBackToTopButton() {
        if (window.scrollY > 200) {
            backToTop.style.display = "flex";
        } else {
            backToTop.style.display = "none";
        }
    }

    window.addEventListener(
        "scroll",
        updateBackToTopButton,
        { passive: true }
    );

    // Set the correct initial visibility.
    updateBackToTopButton();
}
