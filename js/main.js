"use strict";

const themeToggle = document.querySelector("#themeToggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");

const systemPrefersDark =
    window.matchMedia("(prefers-color-scheme: dark)").matches;

const initialTheme =
    savedTheme ||
    (systemPrefersDark ? "dark" : "light");

root.dataset.theme = initialTheme;

function updateThemeButton() {

    const isDark =
        root.dataset.theme === "dark";

    themeToggle.querySelector(".themeIcon").textContent =
        isDark ? "☀" : "☾";

    themeToggle.setAttribute(
        "aria-label",
        isDark
            ? "Switch to light mode"
            : "Switch to dark mode"
    );
}

themeToggle.addEventListener("click", () => {

    const currentTheme =
        root.dataset.theme;

    const newTheme =
        currentTheme === "dark"
            ? "light"
            : "dark";

    root.dataset.theme = newTheme;

    localStorage.setItem(
        "theme",
        newTheme
    );

    updateThemeButton();
});

updateThemeButton();