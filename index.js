const toggleSideNavBar = () => {
  if (sideNav.style.display === "none" || sideNav.style.display === "") {
    sideNav.style.display = "block";
    mainSec.style.visibility = "hidden";
  }
  else {
    sideNav.style.display = "none";
    mainSec.style.visibility = "visible";
  }
}

const resetSideNav = () => {
  sideNav.style.removeProperty("display");
  mainSec.style.visibility = "visible";
}
window.addEventListener("resize", resetSideNav);

const navHamburger = document.getElementById("navHamburger");
const sideNav = document.querySelector(".side-nav");
const mainSec = document.querySelector(".main-section");
navHamburger.addEventListener("click", toggleSideNavBar)
sideNav.addEventListener("click", resetSideNav);