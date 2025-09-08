// Global variable
let globalMultiplier = 2;

// Function with parameters & return value
function calculateArea(width, height) {
  // Local variable (function scope)
  let area = width * height * globalMultiplier;
  return area; // return useful value
}

// Demonstrate scope awareness
function showScope() {
  let localMessage = "I'm local to showScope function";
  console.log(localMessage);
  console.log("Global multiplier:", globalMultiplier);
}

// Animate box on button click
const triggerBtn = document.getElementById("triggerBtn");
const animatedBox = document.getElementById("animatedBox");

triggerBtn.addEventListener("click", () => {
  animatedBox.classList.toggle("box-animate");
});

// Use function with return value in DOM
const calcBtn = document.getElementById("calcBtn");
const resultP = document.getElementById("calcResult");

calcBtn.addEventListener("click", () => {
  let result = calculateArea(5, 10);
  resultP.textContent = `Calculated area (with multiplier): ${result}`;
});

// Modal logic
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openModal.addEventListener("click", () => {
  modal.style.display = "flex"; // triggers CSS modal animation
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Demonstrate scope in console
showScope();
