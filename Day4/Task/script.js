// 1
alert("Welcome to my site");
let userName = prompt("please, enter your name...");

var nameTag = document.getElementById("nameTag");

if(userName){nameTag.textContent = "welcome " + userName;}



// 2
var sumButton = document.getElementById("sumButton");

if(sumButton){
    sumButton.addEventListener("click" , function(){
        let num1 = +prompt("enter the first number");
        let num2 = +prompt("enter the second number");

        sumResult = num1 + num2;
        console.log(sumResult)
    })
}


// 3
function Tempreture(tempretur){
    let tempreturResult = (+tempretur >= 30)? "Hot" : "Cold";
    console.log(tempreturResult);
}

let tempretur = prompt("enter the current tempreture...");
Tempreture(tempretur)


// 4
function actualFeel(tempretur , actualFeel){
    if(30 > tempretur && actualFeel > 25 ){console.log("normal")}
    else if(tempretur && actualFeel < 25 ){console.log("Cold")}
    else if(tempretur && actualFeel > 30 ){console.log("Hot")}
    else(console.log("Ambiguous, can’t detect"));
}

let tempretur2 = prompt("enter the current tempreture...");
let actualFeelInput = +prompt("enter the atual feel tempreture");
actualFeel(tempretur , actualFeel);


// 5
function studentFaculty(faculty){
    switch(true){
        case faculty == "FCI":
            console.log("You’re eligible to Programing tracks");
            break;

        case faculty == "Engineering":
            console.log("You’re eligible to Network and Embedded tracks ");
            break;

        case faculty == "Commerce":
            console.log("You’re eligible to ERP and Social medi tracks");
            break;

        default:
            console.log("You’re eligible to SW fundamentals track");
    }
}


// 6
function odd(startNum , endNum){
    for(let i=startNum ; i<=endNum ; i++){
        if(i % 2 != 0){console.log(i);}
    }
}

odd(0 , 10);



// 7
let expression = document.getElementById("expression");
expression.addEventListener("click" , function getExpression(){
    let exp = prompt("entet the expession...")

    // let result = new Function("return " + exp)();
    let result = eval(exp);
    console.log(result);
})



// 8
// let userName;
do {
    userName = prompt("enter your name...");
    if (userName) {
        userName = userName.trim();
    }
} while (!userName || !isNaN(userName)); 

let birthYear;

do {
    birthYear = +prompt("wnter your birth year...");
} while (
    !birthYear || 
    isNaN(birthYear) || 
    birthYear >= 2010
); 

var currentYear = new Date().getFullYear(); 
var age = currentYear - numericBirthYear;

document.write("Name: " + userName + "<br>");
document.write("Birth year: " + numericBirthYear + "<br>");
document.write("Age: " + age);