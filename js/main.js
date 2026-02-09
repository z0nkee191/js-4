"use strict"

const inputUser1 = prompt("input str").trim();
const inputUser2 = prompt("input str").trim();
if (inputUser1 && inputUser2) {
    console.log("Обидва поля заповнені");
} else {
    console.log("Не всі поля заповнені");
}

const inputNum1 = Number(prompt("enter num"));
const inputNum2 = Number(prompt("enter num"));
const result = inputNum1 + inputNum2;
if (result > 10) {
    console.log("Сума більша за 10");
} else {
    console.log("Сума менша або дорівнює 10");
}

const inputStr = prompt("enter str").toLowerCase().trim();
if (inputStr.includes("javascript")) {
    console.log("Текст містить слово JavaScript");
} else {
    console.log("Текст не містить слово JavaScript");
}

const inputNum3 = Number(prompt("enter num"));
if (inputNum3 > 10 && inputNum3 < 20) {
    console.log("Число входить в діапазон від 10 до 20");
} else { 
    console.log("Число не входить в діапазон від 10 до 20");
}

const userName = prompt("enter your name");
const userEmail = prompt("enter you e-mail");
const userPassword = prompt("enter your password");
if (userName.length >= 3 && userEmail.includes("@") && userEmail.includes(".") && userPassword.length >= 6) {
    alert("Перенаправлення на іншу сторінку");
} else {
    alert("Помилка: неправильне заповнення");
}   