var form = document.querySelector(".newsletter-form");
var emailInput = document.getElementById("email");
var errorMessage = document.querySelector(".error-message");
var validateEmail = function (email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    var email = emailInput.value;
    if (!validateEmail(email)) {
        errorMessage.style.display = "block";
        errorMessage.classList.remove("jiggle"); // Reset animation
        void errorMessage.offsetWidth; // Trigger reflow to restart the animation
        errorMessage.classList.add("jiggle");
        emailInput.classList.add("error");
    }
    else {
        errorMessage.style.display = "none";
        emailInput.classList.remove("error");
        setTimeout(function () {
            alert("Form submitted successfully!");
        }, 100);
    }
});
