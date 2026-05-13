// Завдання 1

function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("василь"));



// Завдання 2

function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes("росі") || lowerStr.includes("xxx");
}

console.log(checkSpam("поїхати до росії")); // true
console.log(checkSpam("free xxxxx"));        // true
console.log(checkSpam("innocent rabbit"));   // false



// Завдання 2

function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes("росі") || lowerStr.includes("xxx");
}

console.log(checkSpam("поїхати до росії")); // true
console.log(checkSpam("free xxxxx"));        // true
console.log(checkSpam("innocent rabbit"));   // false



// Завдання 3

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 3) + "...";
    }
    return str;
}

console.log(truncate("що я хотів би розповісти на цю тему:", 20));

console.log(truncate("Всім привіт!", 20));



// Завдання 4

function strikeStr(str) {
    let words = str.split(" ");

    if (words.length <= 3) {
        return str;
    }

    let result = [];
    let line = "";

    for (let i = 0; i < words.length; i++) {
        line += words[i] + " ";

        if ((i + 1) % 3 === 0) {
            result.push(line.trim());
            line = "";
        }
    }

    if (line.length > 0) {
        result.push(line.trim());
    }

    return result.join("\n");
}

console.log(strikeStr("Що я хотів би розповісти на цю тему:"));
console.log(strikeStr("Всім привіт!"));