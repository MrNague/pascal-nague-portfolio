"use strict";

/* =========================================================
   THEME
   ========================================================= */

const root = document.documentElement;
const themeToggle = document.querySelector("#themeToggle");

function getStoredTheme() {
    try {
        return localStorage.getItem("theme");
    } catch (_) {
        return null;
    }
}

function saveTheme(theme) {
    try {
        localStorage.setItem("theme", theme);
    } catch (_) {
        // Ignore storage errors.
    }
}

function getInitialTheme() {
    const savedTheme = getStoredTheme();

    if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
    }

    const systemPrefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    return systemPrefersDark ? "dark" : "light";
}

function updateThemeButton() {
    if (!themeToggle) {
        return;
    }

    const icon = themeToggle.querySelector(".themeIcon");

    if (!icon) {
        return;
    }

    const isDark = root.dataset.theme === "dark";

    icon.textContent = isDark ? "☀" : "☾";

    themeToggle.setAttribute(
        "aria-label",
        isDark
            ? "Switch to light mode"
            : "Switch to dark mode"
    );
}

root.dataset.theme = getInitialTheme();

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const currentTheme = root.dataset.theme;

        const newTheme =
            currentTheme === "dark"
                ? "light"
                : "dark";

        root.dataset.theme = newTheme;

        saveTheme(newTheme);

        updateThemeButton();
    });
}

updateThemeButton();


/* =========================================================
   MOBILE MENU
   ========================================================= */

const header = document.querySelector(".header");
const burgerButton = document.querySelector(".burguer");

const navLinks = document.querySelectorAll(
    ".navbar a"
);

if (header && burgerButton) {
    burgerButton.setAttribute(
        "aria-expanded",
        "false"
    );

    burgerButton.setAttribute(
        "aria-label",
        "Open navigation menu"
    );

    function openMenu() {
        header.classList.add("is-menu-open");

        burgerButton.setAttribute(
            "aria-expanded",
            "true"
        );

        burgerButton.setAttribute(
            "aria-label",
            "Close navigation menu"
        );
    }

    function closeMenu() {
        header.classList.remove("is-menu-open");

        burgerButton.setAttribute(
            "aria-expanded",
            "false"
        );

        burgerButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );
    }

    function toggleMenu() {
        const isOpen =
            header.classList.contains(
                "is-menu-open"
            );

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

    document.addEventListener(
        "keydown",
        (event) => {
            if (
                event.key === "Escape" &&
                header.classList.contains(
                    "is-menu-open"
                )
            ) {
                closeMenu();
                burgerButton.focus();
            }
        }
    );

    window.addEventListener(
        "resize",
        () => {
            if (window.innerWidth > 850) {
                closeMenu();
            }
        }
    );
}


/* =========================================================
   ACTIVE NAVIGATION ON SCROLL
   ========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const menuLinks =
    document.querySelectorAll(
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
        link.removeAttribute("aria-current");

        const href =
            link.getAttribute("href");

        if (
            href === `#${currentSection}`
        ) {
            link.classList.add("active");

            link.setAttribute(
                "aria-current",
                "page"
            );
        }
    });
}

window.addEventListener(
    "scroll",
    setActiveLink,
    { passive: true }
);

window.addEventListener(
    "load",
    setActiveLink
);


/* =========================================================
   LANGUAGE / I18N
   ========================================================= */

const languageButtons =
    document.querySelectorAll(
        ".languageButton"
    );

function getTranslation(
    object,
    path
) {
    if (!object || !path) {
        return null;
    }

    return path
        .split(".")
        .reduce(
            (current, key) => {
                if (
                    current &&
                    current[key] !== undefined
                ) {
                    return current[key];
                }

                return null;
            },
            object
        );
}

function getTranslationsObject() {
    if (
        typeof translations !==
        "undefined"
    ) {
        return translations;
    }

    console.error(
        "translations.js was not loaded before main.js."
    );

    return null;
}

function saveLanguage(language) {
    try {
        localStorage.setItem(
            "language",
            language
        );
    } catch (_) {
        // Ignore storage errors.
    }
}

function getStoredLanguage() {
    try {
        return localStorage.getItem(
            "language"
        );
    } catch (_) {
        return null;
    }
}

function updateLanguageButtons(
    language
) {
    languageButtons.forEach(
        (button) => {
            const active =
                button.dataset.lang ===
                language;

            button.classList.toggle(
                "active",
                active
            );

            button.setAttribute(
                "aria-pressed",
                String(active)
            );
        }
    );
}

function applyLanguage(language) {
    const dictionary =
        getTranslationsObject();

    if (!dictionary) {
        return;
    }

    if (!dictionary[language]) {
        language = "en";
    }

    root.lang = language;

    document
        .querySelectorAll(
            "[data-i18n]"
        )
        .forEach((element) => {
            const key =
                element.dataset.i18n;

            const value =
                getTranslation(
                    dictionary[language],
                    key
                );

            if (
                typeof value === "string"
            ) {
                element.textContent =
                    value;
            }
        });

    document
        .querySelectorAll(
            "[data-i18n-placeholder]"
        )
        .forEach((element) => {
            const key =
                element.dataset
                    .i18nPlaceholder;

            const value =
                getTranslation(
                    dictionary[language],
                    key
                );

            if (
                typeof value === "string"
            ) {
                element.placeholder =
                    value;
            }
        });

    updateLanguageButtons(language);

    saveLanguage(language);
}

function getInitialLanguage() {
    const dictionary =
        getTranslationsObject();

    if (!dictionary) {
        return "en";
    }

    const savedLanguage =
        getStoredLanguage();

    if (
        savedLanguage &&
        dictionary[savedLanguage]
    ) {
        return savedLanguage;
    }

    const browserLanguage =
        (
            navigator.language ||
            "en"
        )
            .slice(0, 2)
            .toLowerCase();

    if (
        dictionary[browserLanguage]
    ) {
        return browserLanguage;
    }

    return "en";
}

languageButtons.forEach(
    (button) => {
        button.addEventListener(
            "click",
            () => {
                const language =
                    button.dataset.lang;

                if (language) {
                    applyLanguage(
                        language
                    );
                }
            }
        );
    }
);

applyLanguage(
    getInitialLanguage()
);