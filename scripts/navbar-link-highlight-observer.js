// In navigation.css, there are 2 classed defined for switching nav-link background.
// "link-active" give a nav-link a orange background, as well as an animation for the background to slowly light up
// "link-deactive" removes the orange background from a nav-link, there is also an animation for that.
const myWork = document.querySelector("#work");
const myWorkLinks = document.querySelectorAll(".work-link");
const expertise = document.querySelector("#my-expertise");
const expertiseLinks = document.querySelectorAll(".expertise-link");
const price = document.querySelector("#price-table");
const priceLinks = document.querySelectorAll(".price-link");
const testimonial = document.querySelector("#testimonial");
const testimonialLinks = document.querySelectorAll(".testimonial-link");

// When user scroll to a new section, let the corresponding nav link change background color,
// And when user scroll away from this section, undo the background color change.
// 1. section testimonial
const testimonialLinkObserver = new IntersectionObserver(
    (entries) => {
        // When this section is intersecting, give the corresponding navlink a "link-active" class, and remove the "link-deactive" class if it has one.
        if (entries[0].isIntersecting) {
            if (testimonialLinks[0].classList.contains("link-deactive")) {
                testimonialLinks.forEach((link) => {
                    link.classList.remove("link-deactive");
                });
            }
            testimonialLinks.forEach((link) => {
                link.classList.add("link-active");
            });
        }
        // When this section moves out of sight and it currently has "link-active" class. remove it and add "link-deactive" class.
        if (!entries[0].isIntersecting && testimonialLinks[0].classList.contains("link-active")) {
            testimonialLinks.forEach((link) => {
                link.classList.remove("link-active");
                link.classList.add("link-deactive");
            });
        }
    },
    {
        threshold: 0.9,
        rootMargin: "50px",
    }
);
testimonialLinkObserver.observe(testimonial);

// 2. section myWork
const myWorkLinkObserver = new IntersectionObserver(
    (entries) => {
        // When this section is intersecting, give the corresponding navlink a "link-active" class, and remove the "link-deactive" class if it has one.
        if (entries[0].isIntersecting) {
            if (myWorkLinks[0].classList.contains("link-deactive")) {
                myWorkLinks.forEach((link) => {
                    link.classList.remove("link-deactive");
                });
            }
            myWorkLinks.forEach((link) => {
                link.classList.add("link-active");
            });
        }
        // When this section moves out of sight and it currently has "link-active" class. remove it and add "link-deactive" class.
        if (!entries[0].isIntersecting && myWorkLinks[0].classList.contains("link-active")) {
            myWorkLinks.forEach((link) => {
                link.classList.remove("link-active");
                link.classList.add("link-deactive");
            });
        }
    },
    {
        threshold: 0.2,
        rootMargin: "60px",
    }
);
myWorkLinkObserver.observe(myWork);

// 3. section expertise
const expertiseLinkObserver = new IntersectionObserver(
    (entries) => {
        // When this section is intersecting, give the corresponding navlink a "link-active" class, and remove the "link-deactive" class if it has one.
        if (entries[0].isIntersecting) {
            if (expertiseLinks[0].classList.contains("link-deactive")) {
                expertiseLinks.forEach((link) => {
                    link.classList.remove("link-deactive");
                });
            }
            expertiseLinks.forEach((link) => {
                link.classList.add("link-active");
            });
        }
        // When this section moves out of sight and it currently has "link-active" class. remove it and add "link-deactive" class.
        if (!entries[0].isIntersecting && expertiseLinks[0].classList.contains("link-active")) {
            expertiseLinks.forEach((link) => {
                link.classList.remove("link-active");
                link.classList.add("link-deactive");
            });
        }
    },
    {
        threshold: 0.7,
        rootMargin: "50px",
    }
);
expertiseLinkObserver.observe(expertise);

// 4. section price
const priceLinkObserver = new IntersectionObserver(
    (entries) => {
        // When this section is intersecting, give the corresponding navlink a "link-active" class, and remove the "link-deactive" class if it has one.
        if (entries[0].isIntersecting) {
            if (priceLinks[0].classList.contains("link-deactive")) {
                priceLinks.forEach((link) => {
                    link.classList.remove("link-deactive");
                });
            }
            priceLinks.forEach((link) => {
                link.classList.add("link-active");
            });
        }
        // When this section moves out of sight and it currently has "link-active" class. remove it and add "link-deactive" class.
        if (!entries[0].isIntersecting && priceLinks[0].classList.contains("link-active")) {
            priceLinks.forEach((link) => {
                link.classList.remove("link-active");
                link.classList.add("link-deactive");
            });
        }
    },
    {
        threshold: 0.4,
        rootMargin: "50px",
    }
);
priceLinkObserver.observe(price);
