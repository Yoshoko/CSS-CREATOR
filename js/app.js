// Créer nos constantes 

const yoshiko = document.querySelector(".yoshiko");
const btnColors = document.querySelectorAll(".color");
const btnBgColors = document.querySelectorAll(".bgcolor")

const selectFont = document.getElementById("Font");
const selectFontSize = document.getElementById("FontSize")

selectFont.onchange = function () {
    yoshiko.style.fontFamily = selectFont.value;
};

selectFontSize.onchange = function () {
    yoshiko.style.fontSize = selectFontSize.value + "px";
}

console.log(yoshiko);
console.log(btnColors);

// écouteur "multiple"
btnColors.forEach((button) => {
    console.log(button);
    console.log(button.dataset.color);

    button.onclick = function () {
        console.log(button.dataset.color);
        yoshiko.style.color = button.dataset.color;
    };
});
btnBgColors.forEach((button) => {
    console.log(button);
    console.log(button.dataset.bgColor);

    button.onclick = function () {
        console.log(button.dataset.color);
        yoshiko.style.backgroundColor = button.dataset.color;
    };
});



