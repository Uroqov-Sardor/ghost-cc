document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.style.opacity = 0;
    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);
  }, 2000);
});
