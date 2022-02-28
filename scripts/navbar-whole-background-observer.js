// Define variables
const navBar = document.querySelector("#nav-bar");
const intro = document.querySelector("#intro");
// Make the background of desktop nav bar turn white when user scrolls past intro section
const navWholeBgObserver = new IntersectionObserver(
    (entries) => {
        console.log("Intro is intersecting: ", entries[0].isIntersecting);
        if (!entries[0].isIntersecting) {
            // If intro section is NOT intersecting, replace class ".at-top" with ".not-at-top"
            navBar.classList.add("not-at-top", entries[0].isIntersecting);
            navBar.classList.remove("at-top", entries[0].isIntersecting);
        } else {
            // If intro section is intersecting, replace class ".not-at-top" with ".at-top"
            navBar.classList.remove("not-at-top", entries[0].isIntersecting);
            navBar.classList.add("at-top", entries[0].isIntersecting);
        }
    },
    {
        threshold: 0.6,
    }
);
navWholeBgObserver.observe(intro);
