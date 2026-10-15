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


/* =========================================================
   MOBILE MENU
   ========================================================= */

const header = document.querySelector(".header");
const burgerButton = document.querySelector(".burguer");
const navLinks = document.querySelectorAll(".navbar a");


if (header && burgerButton) {

    burgerButton.setAttribute("aria-expanded", "false");
    burgerButton.setAttribute("aria-label", "Open navigation menu");


    function openMenu() {

        header.classList.add("is-menu-open");

        burgerButton.setAttribute("aria-expanded", "true");
        burgerButton.setAttribute("aria-label", "Close navigation menu");

    }


    function closeMenu() {

        header.classList.remove("is-menu-open");

        burgerButton.setAttribute("aria-expanded", "false");
        burgerButton.setAttribute("aria-label", "Open navigation menu");

    }


    function toggleMenu() {

        const isOpen =
            header.classList.contains("is-menu-open");

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }

    }


    burgerButton.addEventListener(
        "click",
        toggleMenu
    );


    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            closeMenu();

        });

    });


    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            header.classList.contains("is-menu-open")
        ) {

            closeMenu();

            burgerButton.focus();

        }

    });


    window.addEventListener("resize", () => {

        if (window.innerWidth > 850) {

            closeMenu();

        }

    });

}


/* =========================================================
   ACTIVE NAVIGATION ON SCROLL
   ========================================================= */

const sections = document.querySelectorAll(
    "section[id]"
);

const menuLinks = document.querySelectorAll(
    '.navbar a[href^="#"]'
);


function setActiveLink() {

    let currentSection = "";

    const scrollPosition =
        window.scrollY + 140;


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;


        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    menuLinks.forEach((link) => {

        link.classList.remove("active");


        const href =
            link.getAttribute("href");


        if (
            href === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    setActiveLink
);


window.addEventListener(
    "load",
    setActiveLink
);

/* =========================================================
   LANGUAGE / I18N
   ========================================================= */

const languageButtons =
    document.querySelectorAll(".languageButton");


function getTranslation(object, path) {

    return path
        .split(".")
        .reduce(
            (current, key) =>
                current && current[key] !== undefined
                    ? current[key]
                    : null,
            object
        );

}


function applyLanguage(language) {

    if (!translations[language]) {
        language = "en";
    }


    document.documentElement.lang = language;


    document
        .querySelectorAll("[data-i18n]")
        .forEach((element) => {

            const key =
                element.dataset.i18n;

            const value =
                getTranslation(
                    translations[language],
                    key
                );

            if (value !== null) {
                element.textContent = value;
            }

        });


    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach((element) => {

            const key =
                element.dataset.i18nPlaceholder;

            const value =
                getTranslation(
                    translations[language],
                    key
                );

            if (value !== null) {
                element.placeholder = value;
            }

        });


    languageButtons.forEach((button) => {

        const active =
            button.dataset.lang === language;

        button.classList.toggle(
            "active",
            active
        );

        button.setAttribute(
            "aria-pressed",
            active.toString()
        );

    });


    localStorage.setItem(
        "language",
        language
    );

}


function getInitialLanguage() {

    const savedLanguage =
        localStorage.getItem("language");


    if (
        savedLanguage &&
        translations[savedLanguage]
    ) {
        return savedLanguage;
    }


    const browserLanguage =
        navigator.language
            .slice(0, 2)
            .toLowerCase();


    if (translations[browserLanguage]) {
        return browserLanguage;
    }


    return "en";

}


languageButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            applyLanguage(
                button.dataset.lang
            );

        }
    );

});


applyLanguage(
    getInitialLanguage()
);