// Завдання 1

let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");

let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Classics";

let removed = styles.shift();
console.log(removed);

styles.unshift("Rap", "Reggae");

console.log(styles);



// Завдання 2

function sumInput() {
    let numbers = [];

    while (true) {
        let value = prompt("Введіть число:", "");

        if (value === "" || value === null || !isFinite(value)) {
            break;
        }

        numbers.push(+value);
    }

    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

console.log(sumInput());



// Завдання 3

function getMaxSubSum(arr) {
    let maxSum = 0;
    let currentSum = 0;

    for (let num of arr) {
        currentSum = Math.max(0, currentSum + num);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));        // 5
console.log(getMaxSubSum([2, 1, 2, 3, 9]));       // 17
console.log(getMaxSubSum([-1, 2, 3, 9, 11]));      // 25
console.log(getMaxSubSum([-2, -1, 1, 2]));         // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5]));    // 100
console.log(getMaxSubSum([1, 2, 3]));              // 6
console.log(getMaxSubSum([-1, -2, -3]));           // 0