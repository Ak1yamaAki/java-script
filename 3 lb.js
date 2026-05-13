// Завдання 1

function random(min, max) {
    return Math.random() * (max - min) + min;
}

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));



// Завдання 2

function isPrime(number) {

    // Числа менше 2 не є простими
    if (number < 2) {
        return false;
    }

    // Перевірка дільників
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(17)); // true
console.log(isPrime(15)); // false



// Завдання 3

function recursiveSum(n) {

    // Якщо число додатне
    if (n > 0) {
        let sum = 0;

        for (let i = 1; i <= n; i++) {
            sum += i;
        }

        return sum;
    }

    // Якщо число від'ємне
    else if (n < 0) {
        let sum = 0;

        for (let i = -1; i >= n; i--) {
            sum += i;
        }

        return sum;
    }

    return 0;
}

console.log(recursiveSum(5));   // 15
console.log(recursiveSum(-3));  // -6