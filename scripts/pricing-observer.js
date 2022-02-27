// Define variables
const marks = document.querySelectorAll(".check-mark");
// Increase opacity of each check/uncheck mark from 0 to 1 when they intersect
const marksObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("show-mark", entry.isIntersecting);
            // Prevent the check/uncheck marks from animating when user scroll back
            if (entry.isIntersecting) {
                expertiseObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 1,
        rootMargin: "100px",
    }
);
marks.forEach((mark) => {
    marksObserver.observe(mark);
});
