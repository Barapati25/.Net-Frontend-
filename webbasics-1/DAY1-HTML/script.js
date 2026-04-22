// Step 1: Get elements from HTML
let alertButton = document.getElementById("alertBtn");
let changeButton = document.getElementById("changeBtn");
let resetButton = document.getElementById("resetBtn");

// Step 2: Attach events
alertButton.addEventListener("click", showAlert);
changeButton.addEventListener("click", changeText);
resetButton.addEventListener("click", resetText);

// Step 3: Define functions
function showAlert() {
    alert("Akhil Hello from Day 8!");
}

function changeText() {
    document.getElementById("text").innerText = "Text Changed!";
}

function resetText() {
    document.getElementById("text").innerText = "Original Text";
}