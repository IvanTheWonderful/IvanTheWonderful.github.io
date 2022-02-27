// Define variables
const englishContent = document.getElementsByClassName("en");
const chineseContent = document.getElementsByClassName("cn");
const englishSwitch = document.querySelectorAll(".english-switch");
const chineseSwitch = document.querySelectorAll(".chinese-switch");

// Define functions to switch between English/Chinese
function switchToChinese() {
    // turn every Chinese content's display to "initial"
    for (let i = 0; i < chineseContent.length; i++) {
        chineseContent[i].style.display = "initial";
    }
    // turn every English content's display to "none"
    for (let i = 0; i < englishContent.length; i++) {
        englishContent[i].style.display = "none";
    }
    // Set color of "English switch" to grey
    englishSwitch.forEach((element) => {
        element.style.color = "grey";
    });
    // Set color of "Chinese switch" to white
    chineseSwitch.forEach((element) => {
        element.style.color = "white";
    });
}

function switchToEnglish() {
    // turn every English content's display to "initial"
    for (let i = 0; i < englishContent.length; i++) {
        englishContent[i].style.display = "initial";
    }
    // turn every Chinese content's display to "none"
    for (let i = 0; i < chineseContent.length; i++) {
        chineseContent[i].style.display = "none";
    }
    // Set color of "English switch" to white
    englishSwitch.forEach((element) => {
        element.style.color = "white";
    });
    // Set color of "Chinese switch" to grey
    chineseSwitch.forEach((element) => {
        element.style.color = "grey";
    });
}
