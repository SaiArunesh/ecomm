const toggleSideNavBar = () => {
    if (sideNav.style.display !== "none") {
      sideNav.style.display = "none";
      mainSec.style.visibility = "visible";
    }
    else {
      sideNav.style.display = "flex";
      mainSec.style.visibility = "hidden";
    }
  }
  
  const resetSideNav = () => {
    sideNav.style.removeProperty("display");
    mainSec.style.visibility = "visible";
  }
  window.addEventListener("resize", resetSideNav);
  
  const navHamburger = document.getElementById("navHamburger");
  const sideNav = document.getElementById("sideNav");
  const mainSec = document.querySelector(".main-section");
  navHamburger.addEventListener("click", toggleSideNavBar)
  sideNav.addEventListener("click", resetSideNav);