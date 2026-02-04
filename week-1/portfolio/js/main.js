const toggle = document.querySelector(".theme-toggle");

// Initialize the page in light mode
document.body.classList.add("light");

// Listen for clicks
toggle.addEventListener("click", function () {
  // Toggle the dark class on body
  document.body.classList.toggle("dark");
});