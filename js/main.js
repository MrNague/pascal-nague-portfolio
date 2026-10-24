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

        localStorage.setItem(
            "theme",
            theme
        );

    } catch (_) {

        // Ignore storage errors.

    }

}


function getInitialTheme() {

    const savedTheme =
        getStoredTheme();


    if (
        savedTheme === "light" ||
        savedTheme === "dark"
    ) {

        return savedTheme;

    }


    const systemPrefersDark =
        window.matchMedia &&
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;


    return systemPrefersDark
        ? "dark"
        : "light";

}


/* =========================================================
   TRANSLATION HELPERS
   ========================================================= */

function getCurrentLanguage() {

    return root.lang || "en";

}


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


/* =========================================================
   THEME BUTTON
   ========================================================= */

function updateThemeButton() {

    if (!themeToggle) {

        return;

    }


    const icon =
        themeToggle.querySelector(
            ".themeIcon"
        );


    const dictionary =
        getTranslationsObject();


    const language =
        getCurrentLanguage();


    const isDark =
        root.dataset.theme === "dark";


    if (icon) {

        icon.textContent =
            isDark
                ? "☀"
                : "☾";

    }


    if (
        dictionary &&
        dictionary[language]
    ) {

        const labelKey =
            isDark
                ? "accessibility.themeLight"
                : "accessibility.themeDark";


        const label =
            getTranslation(
                dictionary[language],
                labelKey
            );


        const title =
            getTranslation(
                dictionary[language],
                "accessibility.changeTheme"
            );


        if (label) {

            themeToggle.setAttribute(
                "aria-label",
                label
            );

        }


        if (title) {

            themeToggle.setAttribute(
                "title",
                title
            );

        }

    }

}


root.dataset.theme =
    getInitialTheme();


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        () => {

            const newTheme =
                root.dataset.theme === "dark"
                    ? "light"
                    : "dark";


            root.dataset.theme =
                newTheme;


            saveTheme(
                newTheme
            );


            updateThemeButton();

        }
    );

}


updateThemeButton();


/* =========================================================
   HOME LOGO
   Clicking the logo reloads the page and returns to home.
   ========================================================= */

const homeLogo =
    document.querySelector(
        "#homeLogo"
    );


if (homeLogo) {

    homeLogo.addEventListener(
        "click",
        (event) => {

            event.preventDefault();


            try {

                sessionStorage.setItem(
                    "reloadToHome",
                    "true"
                );

            } catch (_) {

                // Ignore storage errors.

            }


            window.location.reload();

        }
    );

}


function restoreHomeAfterReload() {

    let shouldGoHome =
        false;


    try {

        shouldGoHome =
            sessionStorage.getItem(
                "reloadToHome"
            ) === "true";


        if (shouldGoHome) {

            sessionStorage.removeItem(
                "reloadToHome"
            );

        }

    } catch (_) {

        shouldGoHome =
            false;

    }


    if (!shouldGoHome) {

        return;

    }


    history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}#hero`
    );


    requestAnimationFrame(
        () => {

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "auto"
            });

        }
    );

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

const header =
    document.querySelector(
        ".header"
    );


const burgerButton =
    document.querySelector(
        ".burguer"
    );


const navLinks =
    document.querySelectorAll(
        ".navbar a"
    );


function updateBurgerLabel(
    isOpen
) {

    if (!burgerButton) {

        return;

    }


    const dictionary =
        getTranslationsObject();


    const language =
        getCurrentLanguage();


    if (
        !dictionary ||
        !dictionary[language]
    ) {

        return;

    }


    const key =
        isOpen
            ? "accessibility.closeMenu"
            : "accessibility.openMenu";


    const value =
        getTranslation(
            dictionary[language],
            key
        );


    if (value) {

        burgerButton.setAttribute(
            "aria-label",
            value
        );

    }

}


if (
    header &&
    burgerButton
) {

    burgerButton.setAttribute(
        "aria-expanded",
        "false"
    );


    updateBurgerLabel(
        false
    );


    function openMenu() {

        header.classList.add(
            "is-menu-open"
        );


        burgerButton.setAttribute(
            "aria-expanded",
            "true"
        );


        updateBurgerLabel(
            true
        );

    }


    function closeMenu() {

        header.classList.remove(
            "is-menu-open"
        );


        burgerButton.setAttribute(
            "aria-expanded",
            "false"
        );


        updateBurgerLabel(
            false
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


    navLinks.forEach(
        (link) => {

            link.addEventListener(
                "click",
                closeMenu
            );

        }
    );


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

            if (
                window.innerWidth >
                850
            ) {

                closeMenu();

            }

        }
    );

}


/* =========================================================
   ACTIVE NAVIGATION ON SCROLL
   ========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const menuLinks =
    document.querySelectorAll(
        '.navbar a[href^="#"]'
    );


function setActiveLink() {

    let currentSection =
        "";


    const scrollPosition =
        window.scrollY +
        140;


    sections.forEach(
        (section) => {

            const sectionTop =
                section.offsetTop;


            const sectionHeight =
                section.offsetHeight;


            if (
                scrollPosition >=
                sectionTop &&
                scrollPosition <
                sectionTop +
                sectionHeight
            ) {

                currentSection =
                    section.getAttribute(
                        "id"
                    );

            }

        }
    );


    menuLinks.forEach(
        (link) => {

            link.classList.remove(
                "active"
            );


            link.removeAttribute(
                "aria-current"
            );


            const href =
                link.getAttribute(
                    "href"
                );


            if (
                href ===
                `#${currentSection}`
            ) {

                link.classList.add(
                    "active"
                );


                link.setAttribute(
                    "aria-current",
                    "page"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    setActiveLink,
    {
        passive: true
    }
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


function saveLanguage(
    language
) {

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


/* Normal text */

function applyTextTranslations(
    dictionary,
    language
) {

    document
        .querySelectorAll(
            "[data-i18n]"
        )
        .forEach(
            (element) => {

                const key =
                    element.dataset.i18n;


                const value =
                    getTranslation(
                        dictionary[language],
                        key
                    );


                if (
                    typeof value ===
                    "string"
                ) {

                    element.textContent =
                        value;

                }

            }
        );

}


/* Text containing controlled HTML such as <br> */

function applyHtmlTranslations(
    dictionary,
    language
) {

    document
        .querySelectorAll(
            "[data-i18n-html]"
        )
        .forEach(
            (element) => {

                const key =
                    element.dataset.i18nHtml;


                const value =
                    getTranslation(
                        dictionary[language],
                        key
                    );


                if (
                    typeof value ===
                    "string"
                ) {

                    element.innerHTML =
                        value;

                }

            }
        );

}


/* Attributes:
   placeholder
   aria-label
   title
   content
   alt
*/

function applyAttributeTranslations(
    dictionary,
    language
) {

    const attributeMap = [

        [
            "data-i18n-placeholder",
            "placeholder"
        ],

        [
            "data-i18n-aria-label",
            "aria-label"
        ],

        [
            "data-i18n-title",
            "title"
        ],

        [
            "data-i18n-content",
            "content"
        ],

        [
            "data-i18n-alt",
            "alt"
        ]

    ];


    attributeMap.forEach(
        (
            [
                sourceAttribute,
                targetAttribute
            ]
        ) => {

            document
                .querySelectorAll(
                    `[${sourceAttribute}]`
                )
                .forEach(
                    (element) => {

                        const key =
                            element.getAttribute(
                                sourceAttribute
                            );


                        const value =
                            getTranslation(
                                dictionary[language],
                                key
                            );


                        if (
                            typeof value ===
                            "string"
                        ) {

                            element.setAttribute(
                                targetAttribute,
                                value
                            );

                        }

                    }
                );

        }
    );

}


/* Browser tab title */

function updateDocumentMetadata(
    dictionary,
    language
) {

    const title =
        getTranslation(
            dictionary[language],
            "meta.title"
        );


    if (title) {

        document.title =
            title;

    }

}


function applyLanguage(
    language
) {

    const dictionary =
        getTranslationsObject();


    if (!dictionary) {

        return;

    }


    if (
        !dictionary[language]
    ) {

        language =
            "en";

    }


    root.lang =
        language;


    applyTextTranslations(
        dictionary,
        language
    );


    applyHtmlTranslations(
        dictionary,
        language
    );


    applyAttributeTranslations(
        dictionary,
        language
    );


    updateDocumentMetadata(
        dictionary,
        language
    );


    updateLanguageButtons(
        language
    );


    saveLanguage(
        language
    );


    updateThemeButton();


    if (burgerButton) {

        updateBurgerLabel(
            header &&
            header.classList.contains(
                "is-menu-open"
            )
        );

    }

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
        dictionary[
            browserLanguage
        ]
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


restoreHomeAfterReload();


updateThemeButton();