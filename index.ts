const form = document.querySelector(".newsletter-form") as HTMLFormElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const errorMessage = document.querySelector(".error-message") as HTMLElement;

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
};

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value;

  if (!validateEmail(email)) {
    errorMessage.style.display = "block";
    errorMessage.classList.remove("jiggle"); // Reset animation
    void errorMessage.offsetWidth; // Trigger reflow to restart the animation
    errorMessage.classList.add("jiggle");

    emailInput.classList.add("error");
  } else {
    errorMessage.style.display = "none";
    emailInput.classList.remove("error");
    setTimeout(() => {
      alert("Form submitted successfully!");
    }, 100);
  }
});
