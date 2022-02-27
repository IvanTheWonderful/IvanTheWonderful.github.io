// Define variables
const closeButtons = document.getElementsByClassName("close-card-intro");
const workCards = document.getElementsByClassName("work-card");
const cardIntros = document.getElementsByClassName("work-card-intro");
// Define a function to close a work-card-intro
function closeIntro(i) {
    cardIntros[i].style.visibility = "hidden";
}
// Give closeIntro(i) to each coresponding close-card-intro button
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", function (e) {
        e.stopPropagation(openIntro(i));
        closeIntro(i);
        console.log(cardIntros[i].style.visibility);
    });
}
// Define a function to open a work-card-intro
function openIntro(i) {
    cardIntros[i].style.visibility = "visible";
}
// Give openIntro(i) to each coresponding work-card
for (let i = 0; i < workCards.length; i++) {
    workCards[i].addEventListener("click", function () {
        openIntro(i);
        console.log(cardIntros[i].style.visibility);
    });
}
