// Задача 1
let num1 = Number(prompt("Введите первое число:"));
let num2 = Number(prompt("Введите второе число:"));
let num3 = Number(prompt("Введите третье число:"));

let maxNumber = num1;

if (num2 > maxNumber) {
    maxNumber = num2;
}
if (num3 > maxNumber) {
    maxNumber = num3;
}
alert(maxNumber);
console.log("задача 1: ", maxNumber);

// Задача 2
let age = Number(prompt("Введите возраст:"));

if (age >= 18 && age <= 60) {
    alert(true);
    console.log("задача 2: true");
} else {
    alert(false);
    console.log("задача 2: false");
}

// Задача 3
const correctUsername = "admin";
const correctPassword = "password123";

let inputUsername = prompt("Введите username:");
let inputPassword = prompt("Введите пароль:");

if (inputUsername === correctUsername && inputPassword === correctPassword) {
    alert("Вы успешно вошли в систему");
    console.log("задача 3: true");
} else {
    alert("Некорректный username или пароль");
    console.log("задача 3: false");
}

// Задача 4
const answer1 = "4";
const answer2 = "Париж";
const answer3 = "Синий";
const answer4 = "Вода";
const answer5 = "Солнце";

let score = 0;

let userAnswer1 = prompt("Сколько будет 2 + 2?");
if (userAnswer1 === answer1) {
    score++;
}

let userAnswer2 = prompt("Столица Франции?");
if (userAnswer2 === answer2) {
    score++;
}

let userAnswer3 = prompt("Какого цвета небо?");
if (userAnswer3 === answer3) {
    score++;
}

let userAnswer4 = prompt("Какая жидкость является лучшим растворителем?");
if (userAnswer4 === answer4) {
    score++;
}

let userAnswer5 = prompt("Какой орган зрения у человека?");
if (userAnswer5 === answer5) {
    score++;
}

alert(`Ваш результат: ${score} из 5`);
console.log("задача 4: ", score);

// Задача 5
let number = Number(prompt("Введите число:"));
if (number % 2 === 0 || number % 7 === 0) {
    alert("Подходит");
    console.log("задача 5: true");
} else {
    alert("Не подходит");
    console.log("задача 5: false");
}

// Задача 6
let sum = Number(prompt("Введите сумму покупки:"));

if (sum > 5000) {
    let discount = sum * 0.9;
    alert(`Сумма со скидкой: ${discount}`);
    console.log("задача 6: ", discount);
} else {
    alert(`Сумма без скидки: ${sum}`);
    console.log("задача 6: ", sum);
}

// Задача 7
let words = prompt("Введите любую букву английского алфавита:");
if (words === "a" || words === "e" || words === "i" || words === "o" || words === "u") {
    alert("True");
    console.log("задача 7: true");
} else {
    alert("False");
    console.log("задача 7: false");
}

// Задача 8
let number1 = Number(prompt("Введите число:"));
let procent = Number(prompt("Введите процент:"));
let result = (number1 * procent) / 100;
alert(`Результат: ${result}`);
console.log("задача 8: ", result);
