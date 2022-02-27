// Define variables
const testimonialSection = document.getElementById("testimonial");
const testimDots = Array.prototype.slice.call(document.getElementById("testimonial-dots").children);
const testimContent = Array.prototype.slice.call(
    document.getElementById("testimonial-content").children
);
const testimLeftArrow = document.getElementById("left-arrow");
const testimRightArrow = document.getElementById("right-arrow");
var testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
    touchStartPosition,
    touchEndPosition,
    touchPosDiff,
    ignoreTouch = 30;

// Start playing carousel div by div when loaded.
window.onload = function () {
    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }
        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
        }
        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }
        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");
        currentActive = currentSlide;
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide((currentSlide += 1));
        }, testimSpeed);
    }

    testimLeftArrow.addEventListener("click", function () {
        playSlide((currentSlide -= 1));
    });

    testimRightArrow.addEventListener("click", function () {
        playSlide((currentSlide += 1));
    });

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
            playSlide((currentSlide = testimDots.indexOf(this)));
        });
    }

    playSlide(currentSlide);

    // Add keyboard shortcuts
    document.addEventListener("keyup", function (e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    });

    testimonialSection.addEventListener("touchstart", function (e) {
        touchStartPosition = e.changedTouches[0].clientX;
    });

    testimonialSection.addEventListener("touchend", function (e) {
        touchEndPosition = e.changedTouches[0].clientX;
        touchPosDiff = touchStartPosition - touchEndPosition;
        if (touchPosDiff > 0 + ignoreTouch) {
            testimLeftArrow.click();
        } else if (touchPosDiff < 0 - ignoreTouch) {
            testimRightArrow.click();
        } else {
            return;
        }
    });
};
