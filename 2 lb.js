// Завдання 1

let user = {};

user.name = "Марк";

user.surname = "Сміт";

user.name = "Тарас";

delete user.name;



// Завдання 2

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false



// Завдання 3

let salaries = {
    Jarik: 1000,
    Anna: 1600,
    Miko: 1300
};

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum); // 3900



// Завдання 4

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);

// Результат:
// {
//   width: 400,
//   height: 600,
//   title: "My menu"
// }