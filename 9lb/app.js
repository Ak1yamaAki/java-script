const value = document.getElementById("value");

const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const increaseBtn = document.querySelector(".increase");

let count = 0;

function updateColor() {
    if (count > 0) {
        value.style.color = "green";
    } else if (count < 0) {
        value.style.color = "red";
    } else {
        value.style.color = "#222";
    }
}

function updateValue() {
    value.textContent = count;
    updateColor();
}

decreaseBtn.addEventListener("click", function () {
    count--;
    updateValue();
});

increaseBtn.addEventListener("click", function () {
    count++;
    updateValue();
});

resetBtn.addEventListener("click", function () {
    count = 0;
    updateValue();
});