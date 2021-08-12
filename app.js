// navbar
const navLinks = document.querySelector(".nav-links");
const toggleBtn = document.querySelector(".nav-toggle");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show-links");
});
