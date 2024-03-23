/*
Code to activate mobile navigation
*/
const navToggle = document.querySelector(".mobile-nav-toggle");
const iconHamburger = document.querySelector(".icon-hamburger");
const iconClose = document.querySelector(".icon-close");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
    primaryNav.classList.toggle("opened");
    iconHamburger.classList.toggle("display-none");
    iconClose.classList.toggle("display-none");
});

/*
Code to update copyright year automatically
*/
const yearSpan = document.querySelector("#currentYear");
const currentYear = new Date();
yearSpan.innerText = currentYear.getFullYear();