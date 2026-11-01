const toggleButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggleButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  toggleButton.setAttribute("aria-expanded", isOpen);
});


const readMoreBtn = document.querySelector(".read-more-btn");
const moreText = document.querySelector(".more-text");

readMoreBtn.addEventListener("click", () => {
  moreText.classList.toggle("hidden");
});