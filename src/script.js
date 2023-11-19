// getting our elemetns
var openMenu = document.querySelector(".open-Menu");
var closeMenu = document.querySelector(".close-Menu");
var navbar = document.querySelector(".navbar");
// here is our global varibale
// here is our functions
// open menu func
var openMenuHandler = function () {
    if (!navbar.classList.contains("active")) {
        navbar.classList.add("active");
    }
};
// close menu func
var closeMenuHandler = function () {
    if (navbar.classList.contains("active")) {
        navbar.classList.remove("active");
    }
};
// here is our event lisnters
openMenu.addEventListener("click", openMenuHandler);
closeMenu.addEventListener("click", closeMenuHandler);
