(function () {
  "use strict";

  var STORAGE_KEY = "theme";

  function getPreferred() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.setAttribute("aria-label", "Switch to " + (theme === "dark" ? "light" : "dark") + " mode");
      var moon = btn.querySelector(".icon-moon");
      var sun = btn.querySelector(".icon-sun");
      if (moon && sun) {
        moon.style.display = theme === "dark" ? "none" : "block";
        sun.style.display = theme === "dark" ? "block" : "none";
      }
    }
  }

  // Apply immediately to avoid flash
  apply(getPreferred());

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    apply(getPreferred());

    btn.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme") || getPreferred();
      var next = current === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      apply(next);
    });
  });
})();
