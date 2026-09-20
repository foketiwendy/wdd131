// =========================================
// W05 Review Confirmation
// =========================================

// Get current review count
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

// Increase count by one
reviewCount++;

// Save updated count
localStorage.setItem("reviewCount", reviewCount);

// Display count
document.querySelector("#reviewCounter").textContent = reviewCount;

// =========================================
// Footer
// =========================================

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    document.lastModified;