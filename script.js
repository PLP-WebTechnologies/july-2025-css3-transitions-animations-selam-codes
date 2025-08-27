// Simple add function with parameters + return
function add(a, b) {
  return a + b;
}

// Function with local vs global scope
let globalNumber = 10;
function generateRandom(limit) {
  let localNumber = Math.floor(Math.random() * limit) + 1; // local scope
  return localNumber + globalNumber; // shows interaction between scopes
}

// Display function results
document.getElementById("addResult").textContent = add(5, 7);
document.getElementById("randomResult").textContent = generateRandom(90); // 1–100

// === Part 3: Combining CSS + JavaScript ===
// Animate Box
const animateBtn = document.getElementById("animateBtn");
const animateBox = document.getElementById("animateBox");

animateBtn.addEventListener("click", () => {
  animateBox.classList.toggle("animate");
});

// Modal Logic
const modalBtn = document.getElementById("modalBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

modalBtn.addEventListener("click", () => {
  modal.classList.add("show");
  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 500); // wait for fade-out transition
});
