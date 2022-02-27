// Define variables
const myExpertise = document.querySelectorAll(".icon-n-title");
// Make the background of desktop nav bar turn white when user scrolls past intro section
const expertiseObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("show-expertise", entry.isIntersecting);
            // Prevent the cards from animating when user scroll back
            if (entry.isIntersecting) {
                expertiseObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 1,
    }
);
myExpertise.forEach((expertise) => {
    expertiseObserver.observe(expertise);
});
