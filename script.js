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



const typeRadios = document.querySelectorAll("input[name='insurance_type']");
const thirdFields = document.querySelector(".third-fields");
const bodyFields = document.querySelector(".body-fields");

function updateFields() {
  const selected = document.querySelector("input[name='insurance_type']:checked").value;

  const showThird = selected === "ثالث" || selected === "ثالث و بدنه";
  const showBody = selected === "بدنه" || selected === "ثالث و بدنه";

  thirdFields.classList.toggle("hidden", !showThird);
  bodyFields.classList.toggle("hidden", !showBody);
}

typeRadios.forEach((radio) => {
  radio.addEventListener("change", updateFields);
});

updateFields();