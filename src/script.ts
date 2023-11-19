// getting our elemetns
const openMenu = document.querySelector(".open-Menu") as HTMLElement;
const closeMenu = document.querySelector(".close-Menu") as HTMLElement;
const navbar = document.querySelector(".navbar") as HTMLElement;
const navLinks = document.querySelector(".nav-Links") as HTMLElement;
// here is our global varibale

// here is our functions

// open menu func

const openMenuHandler: any = () => {
  if (!navbar.classList.contains("active")) {
    navbar.classList.add("active");
    navLinks.classList.remove("active");
  }
};

// close menu func

const closeMenuHandler: any = () => {
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
    navLinks.classList.add("active");
  }
};

// here is our event lisnters
openMenu.addEventListener("click", openMenuHandler);
closeMenu.addEventListener("click", closeMenuHandler);
