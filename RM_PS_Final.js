
/**
 * Remontada Final Problem Solving Task
 * File: RM_PS_Final.js
 */

// 01. Solve Me First
var solveMeFirst = function (a, b) {
    return a + b;
};

// 02. Multiply
var multiply = function (a, b) {
    return a * b;
};

// 03. Even or Odd
var evenOrOdd = function (number) {
    return number % 2 === 0 ? "Even" : "Odd";
};

// 04. Return Negative
var makeNegative = function (number) {
    return number > 0 ? -number : number;
};

// 05. Opposite Number
var opposite = function (number) {
    return -number;
};

// 06. Simple Array Sum
var simpleArraySum = function (ar) {
    let sum = 0;

    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }

    return sum;
};

// 07. sleepIn
var sleepIn = function (weekday, vacation) {
    return !weekday || vacation;
};

// 08. monkeyTrouble
var monkeyTrouble = function (aSmile, bSmile) {
    return aSmile === bSmile;
};

// 09. sumDouble
var sumDouble = function (a, b) {
    let sum = a + b;
    return a === b ? sum * 2 : sum;
};

// 10. diff21
var diff21 = function (n) {
    let difference = Math.abs(n - 21);
    return n > 21 ? difference * 2 : difference;
};

// 11. parrotTrouble
var parrotTrouble = function (talking, hour) {
    return talking && (hour < 7 || hour > 20);
};

// 12. makes10
var makes10 = function (a, b) {
    return a === 10 || b === 10 || a + b === 10;
};

// 13. nearHundred
var nearHundred = function (n) {
    return Math.abs(n - 100) <= 10 ||
        Math.abs(n - 200) <= 10;
};

