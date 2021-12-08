/*---------- toggle style switcher ----------- */

const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style -switcher on scroll

window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

/*------------Theme colors -------------- */
const alternateStyle = document.querySelectorAll(".alternate-style");


function setActiveStyle(color) {
    localStorage.setItem("color", color);
    changeColor();
}

function changeColor() {
    alternateStyle.forEach((style) => {
        if (localStorage.getItem("color") === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    })
}
// checking if 'color' key exist
if (localStorage.getItem("color") !== null) {
    changeColor();
}

/*-------------- theme light and dark mode -----------*/
const dayNigth = document.querySelector(".day-night");

dayNigth.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "ligth");
    }
    updateIcon();
})

function themeMode() {
    // checking if 'theme' key exist
    if (localStorage.getItem("theme") !== null) {
        if (localStorage.getItem("theme") === "ligth") {
            document.body.classList.remove("dark");
        } else {
            document.body.classList.add("dark");
        }
    }
    updateIcon();
}
themeMode();

function updateIcon() {
    if (document.body.classList.contains("dark")) {
        dayNigth.querySelector("i").classList.remove("fa-moon");
        dayNigth.querySelector("i").classList.add("fa-sun");
    } else {
        dayNigth.querySelector("i").classList.remove("fa-sun");
        dayNigth.querySelector("i").classList.add("fa-moon");
    }
}