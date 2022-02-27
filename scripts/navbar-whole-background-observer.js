// Define variables
const navBar = document.querySelector("#nav-bar");
const secretNavStyleSwitch = document.querySelector("#secret-nav-style-switch");
// Make the background of desktop nav bar turn white when user scrolls past intro section
const navWholeBgObserver = new IntersectionObserver((entries) => {
    navBar.classList.toggle("not-at-top", entries[0].isIntersecting);
    navBar.classList.toggle("at-top", entries[0].isIntersecting);
});
navWholeBgObserver.observe(secretNavStyleSwitch);
