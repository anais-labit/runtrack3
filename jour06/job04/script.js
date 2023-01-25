let menuHamburger = document.querySelector("#menu-burger");
let navLinks = document.querySelector("#nav-links");

console.log(menuHamburger);
menuHamburger.addEventListener("click", (ev) => {
  ev.preventDefault();
  navLinks.classList.toggle("mobile-menu");
});
