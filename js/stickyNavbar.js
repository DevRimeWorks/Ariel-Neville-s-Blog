/* sticky navbar */

function handleStickyNavbar() {
    var header = document.querySelector(".header");
    if (window.scrollY > 150) {
      header.classList.add("sticky");
    } else if (window.scrollY === 0) {
      header.classList.remove("sticky");
    }
  }
  
  window.addEventListener("scroll", handleStickyNavbar);
  