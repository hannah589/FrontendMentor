const isMobileScreen = window.matchMedia("(max-width: 900px)").matches;

if (isMobileScreen) {
  // Your JavaScript code to display for mobile screens
  console.log("This code runs on mobile-sized screens.");
  // Example: document.getElementById("mobile-content").style.display = "block";
}