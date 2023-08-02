/* responsive menu */

const menuButton = document.querySelector(".nav-open-btn");
const menuButtonImg = document.querySelector(".nav-open-btn img");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");

let isClicked = false;

menuButton.addEventListener("click", () => {
  if (!isClicked) {
    isClicked = true;
    menuButtonImg.setAttribute("src", "img/menu-exit.svg");
    mobileMenu.style.transform = "translateX(0)";
    body.style.overflowY = "hidden";
  }
  else {
    isClicked = false;
    menuButtonImg.setAttribute("src", "img/menu-btn.svg");
    mobileMenu.style.transform = "translateX(-100%)";
    body.style.overflowY = "auto";
  }
})