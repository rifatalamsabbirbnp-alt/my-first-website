const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (form && formMessage) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        formMessage.textContent =
            "Thank you! Your message has been submitted successfully.";

        formMessage.style.display = "block";

        form.reset();
    });
}

console.log("JavaScript is working!");
