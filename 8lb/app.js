const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const colorText = document.querySelector(".color");
const body = document.body;

btn.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * colors.length);

    const selectedColor = colors[randomNumber];

    body.style.backgroundColor = selectedColor;

    colorText.textContent = selectedColor;
});