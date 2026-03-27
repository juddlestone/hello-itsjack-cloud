(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var cursor = document.getElementById("custom-cursor");
    if (!cursor || window.matchMedia("(pointer: coarse)").matches) return;

    document.addEventListener("mousemove", function (e) {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      cursor.classList.remove("cursor--hidden");
    });

    document.addEventListener("mouseleave", function () {
      cursor.classList.add("cursor--hidden");
    });

    document.addEventListener("mouseenter", function () {
      cursor.classList.remove("cursor--hidden");
    });

    var hoverables = document.querySelectorAll("a, button, .tag, .interest-item");
    hoverables.forEach(function (el) {
      el.addEventListener("mouseenter", function () {
        cursor.classList.add("cursor--hover");
      });
      el.addEventListener("mouseleave", function () {
        cursor.classList.remove("cursor--hover");
      });
    });
  });
})();
