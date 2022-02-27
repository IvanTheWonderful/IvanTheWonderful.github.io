// Define variables
const cards = document.querySelectorAll(".work-card");
// Give each work-card a "show-card" class to complete animation effect
const cardsObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("show-card", entry.isIntersecting);
            // Prevent the cards from animating when user scroll back upward
            if (entry.isIntersecting) {
                cardsObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.6 }
);
cards.forEach((card) => {
    cardsObserver.observe(card);
});
