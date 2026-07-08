const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const themeToggle = document.querySelector(".theme-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const yearEl = document.getElementById("year");
const root = document.documentElement;

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

function closeMenu() {
  if (!header || !menuToggle) {
    return;
  }

  header.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");
  document.body.classList.remove("is-menu-open");
}

function openMenu() {
  if (!header || !menuToggle) {
    return;
  }

  header.classList.add("is-open");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Close menu");
  document.body.classList.add("is-menu-open");
}

function updateThemeToggle(theme) {
  if (!themeToggle) {
    return;
  }

  const isDark = theme === "dark";
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );
}

function setTheme(theme) {
  const nextTheme = theme === "light" ? "light" : "dark";
  root.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
  updateThemeToggle(nextTheme);
}

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    if (header.classList.contains("is-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme") === "light" ? "light" : "dark";
    setTheme(currentTheme === "dark" ? "light" : "dark");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

updateThemeToggle(root.getAttribute("data-theme") === "light" ? "light" : "dark");
