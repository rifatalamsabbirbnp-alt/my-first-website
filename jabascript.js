const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

emailjs.init({
    publicKey: "SALaAMmeRehcHa3sK",
});

if (form && formMessage) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        formMessage.textContent = "Sending your message...";
        formMessage.style.display = "block";

        emailjs.sendForm(
            "service_5d305ji",
            "template_9alilmq",
            form
        ).then(function() {
            formMessage.textContent =
                "Thank you! Your message has been sent successfully.";
            form.reset();
        }).catch(function(error) {
            console.error("EmailJS error:", error);

            formMessage.textContent =
                "Sorry, your message could not be sent. Please try again.";
        });
    });
}const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        backToTop.classList.remove("hidden");
    } else {
        backToTop.classList.add("hidden");
    }
});
