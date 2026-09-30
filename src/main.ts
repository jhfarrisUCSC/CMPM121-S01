/**
 * Main entry point for the CMPM 121 Section Activity
 * Simple starter template - customize to your heart's content!
 */

console.log("🎮 CMPM 121 - Starting...");

// Simple counter for demonstration
let counter: number = 10;

// Create basic HTML structure
document.body.innerHTML = `
  <h1>CMPM 121 Project</h1>
  <p>Clicks Left: <span id="counter">10</span></p>
  <button id="increment">Click Me!</button></p>
  <button id="reset">Reset Clicks</button>
`;

// Add click handler
const incButton = document.getElementById("increment")!;
const counterElement = document.getElementById("counter")!;
const resButton = document.getElementById("reset")!;

incButton.addEventListener("click", () => {
  if (counter > 0) {
    counter--; // Decrease clicks left
    counterElement.textContent = counter.toString();
  } else {
    incButton.style.display = "none"; // Hides Click Button
  }
  console.log(
    "I have these thingies:",
    incButton,
    resButton,
    counterElement,
    counter,
  );
});

resButton.addEventListener("click", () => {
  counterElement.textContent = "10";
  counter = 10; // Resets back to 10
  incButton.style.display = "block"; // Reveals Click Button
  console.log(
    "I have these thingies:",
    incButton,
    resButton,
    counterElement,
    counter,
  );
});
