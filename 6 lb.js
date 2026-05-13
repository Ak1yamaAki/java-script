// Завдання 1

function unique(arr) {
    let result = [];

    for (let item of arr) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }

    return result;
}

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-0"];

console.log(unique(values));



// Завдання 2

function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        let sorted = word.toLowerCase().split("").sort().join("");

        map.set(sorted, word);
    }

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));



// Завдання 3


function countOccurrences(numbers) {
    let map = new Map();

    for (let num of numbers) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }

    return map;
}

const numbers = [1, 2, 3, 4, 2, 1, 3, 5, 6, 5];

console.log(countOccurrences(numbers));



// Завдання 4

function areAllUnique(arr) {
    let set = new Set(arr);
    return set.size === arr.length;
}

const uniqueArray = [1, 2, 3, 4, 5];
console.log(areAllUnique(uniqueArray)); // true

const arrayWithDuplicates = [1, 2, 3, 2, 4, 5];
console.log(areAllUnique(arrayWithDuplicates)); // false