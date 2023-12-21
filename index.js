const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", (e) => {
  mobileMenu.classList.toggle("transform-x-100");
});

