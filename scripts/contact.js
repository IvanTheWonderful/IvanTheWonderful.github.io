// Define variables
const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];
// The current step should be the index of the step(ie. the div[data-step]) that has the class "active",
let currentStep = formSteps.findIndex((step) => {
    return step.classList.contains("active");
});
console.log(currentStep);
// If no div has the class "active", currentstep will return -1. If that happens, currentStep will be set to 0, the first div[data-step]
if (currentStep < 0) {
    currentStep = 0;
    showCurrentStep();
}
// Give the form an eventlistner to transfer between the divs/steps
multiStepForm.addEventListener("click", (e) => {
    let incrementor;
    if (e.target.matches("[data-next]")) {
        // Prevent the buttons from submitting form by default
        e.preventDefault();
        // If user click on "next page" button, set incrementor to 1
        incrementor = 1;
    } else if (e.target.matches("[data-previous]")) {
        // Prevent the buttons from submitting form by default
        e.preventDefault();
        // If user click on "previous page" button, set incrementor to -1
        incrementor = -1;
    }
    // If user didn't click anything, don't do anything
    if (incrementor == null) return;
    // Check if the user inputs are valid. If valid, add incrementor to currentStep
    const inputs = [...formSteps[currentStep].querySelectorAll("input")];
    const allValid = inputs.every((input) => input.reportValidity());
    if (allValid) {
        currentStep += incrementor;
        showCurrentStep();
    }
});
// When user clicks on "next page" or "previous page", do the following:
// 1. remove ".hide" from the new "currentStep", and add ".active" to it.
// 2. remove "active" from the previous "currentStep", and add ".hide" to it.
formSteps.forEach((step) => {
    step.addEventListener("animationend", (e) => {
        formSteps[currentStep].classList.remove("hide");
        e.target.classList.toggle("hide", !e.target.classList.contains("active"));
    });
});
// Define a function to give "currentStep" an ".active"
function showCurrentStep() {
    formSteps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
    });
}
