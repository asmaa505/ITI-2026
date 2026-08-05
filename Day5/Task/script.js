// 1
let tip = document.getElementById("tips");

let tips = [
    "Use 'const' by default and 'let' if you need to reassign variables. Avoid 'var'.",
        "Template literals using backticks (`) allow easy string             interpolation with `${variable}`.",
        "Use triple equals '===' for strict equality checks to avoid unintended type coercion.",
        "Arrow functions `() => {}` provide a shorter syntax and lexically bind the 'this' value.",
        "Use Array methods like .map(), .filter(), and .reduce() instead of traditional for-loops.",
        "Destructuring assignment lets you easily extract values from objects and arrays.",
        "Use Optional Chaining (`?.`) to safely access nested object properties without throwing errors.",
        "Nullish Coalescing (`??`) returns the right-hand value only if the left-hand is null or undefined.",
        "Promises and async/await make asynchronous code easier to write and read than traditional callbacks.",
        "Keep the global scope clean by keeping variables inside functions or ES6 modules."
]

function randomTip(){
    let idx = Math.floor(Math.random() * 10)
    tip.textContent = tips[idx];
}

randomTip();


// 2
let dateBtn = document.getElementById("date");
let dateShow = document.getElementById("dateShow");

dateBtn.addEventListener("click" , function(){
    let date = new Date();
    dateShow.textContent = date.toLocaleString();
})


// 3
let userEmail = prompt("Please enter your email address:");

let emailPattern = /^[^@]+@[^@]+$/;

if (userEmail && emailPattern.test(userEmail.trim())) {
    console.log("Valid Email:");
} else {
    console.log("Invalid Email...");
}


// 4
const nameRegex = /^[a-zA-Z]{3,}(?:\s[a-zA-Z]{3,})+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.(com|net|edu|org)\.eg$/i;

let fullName = prompt("enter your name");
while (!fullName || !nameRegex.test(fullName)) {
    fullName = prompt("Invalid Name...");
}

let email = prompt("enter your email");
while (!email || !emailRegex.test(email)) {
    email = prompt("Invalid Email...");
}

console.log("Valid Full Name:", fullName);
console.log("Valid Email:", email);

function ShowDate(date) {
    const datePattern = /^\d{2}-\d{2}-\d{4}$/;

    if (!date || !datePattern.test(date)) {
        alert("Wrong Date Format");
        return;
    }

    const [dayStr, monthStr, yearStr] = date.split("-");

    const day = Number(dayStr);
    const month = Number(monthStr);
    const year = Number(yearStr);

    const dateNew = new Date(year, month - 1, day);

    alert(dateNew.toDateString());
    }


document.getElementById("showDateBtn").addEventListener("click", function () {
const userInput = prompt("Enter your birth date");
ShowDate(userInput);
});