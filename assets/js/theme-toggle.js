// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

function setTheme(theme) {
  document.body.classList.toggle("dark-mode", theme === "dark");
  themeIcon.textContent = theme === "dark" ? "🌞" : "🌙";
  localStorage.setItem("theme", theme);
}

themeToggle.addEventListener("click", () => {
  const currentTheme = document.body.classList.contains("dark-mode")
    ? "light"
    : "dark";
  setTheme(currentTheme);
});

// Load saved theme
setTheme(localStorage.getItem("theme") || "light");
a;
