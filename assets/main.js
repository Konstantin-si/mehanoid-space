document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle
  const themeToggle = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme") || 
    (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const active = document.documentElement.getAttribute("data-theme");
      const next = active === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateThemeIcon(next);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    if (theme === "light") {
      themeToggle.innerHTML = `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`;
      themeToggle.setAttribute("aria-label", "Switch to dark mode");
    } else {
      themeToggle.innerHTML = `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`;
      themeToggle.setAttribute("aria-label", "Switch to light mode");
    }
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
