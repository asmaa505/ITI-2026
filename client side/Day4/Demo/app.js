//shoe messege to user
// window.alert("hi  im ahmed");
// document.write("hi im ahmed");
// document.getElementById("demo").innerHTML = "ahmed samir" ;
// console.log("hello world");

//varibles

/* 
name                  7name
_name                 while-for
$name                  full-name   @ !
first_name
first$name
firstName     camel case
 */

// var fullName ="ahmed";   //inilization
// var fullName ;             //declartion
// fullName="ahmed";           //assign

// var fullName ="ahmed";
// fullName = "samir"     //reassign
// var fullName ="rady";   //redeclare
// console.log(fullName);

//types

// var name ="ahmed";
// var age =25 ;
// var islogin  = true;
// var islogin  = false;
// var firstName ;
// var lastName =null ;
//
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof islogin);
// console.log(typeof firstName);
// console.log(typeof lastName);

//opertors
// arthimetic
/* 
+
-
*
/
%
**
++
--
*/

// var x =10 ;
// x--;
// console.log(x);

//assign

// var x =10 ;
// // x = x + 1 ;
// x += 1 ;
// console.log(x);

//comparison
/* 
>
>=
<
<=
==             value
!=
===            type,valu
!==
*/

// console.log(   "4" === 4 );

//logical
//           &&   ||      !
// console.log( !(50>40   &&  4>3   && 1==1));

// take a value user

//   var name =window.prompt("enter your name");
//   Niumber()                  +
// var num1 = + window.prompt("enter first number");
// var num2 =  + window.prompt("enter second number");
// var result = num1 + num2 ;
// console.log(result);

// var x= "10";
// console.log( + x);
// console.log( typeof x);

// condition
///if
// var age =18;
// if (age >=18){
//     console.log("login succeful");
// }
// if (age >=18){
//     console.log("login succeful");
// }else{
//     console.log("can't login");
// }

// var level ="one";

// if(level == "one"){
//     console.log("study frontend");
// }else if( level =="two"){
//     console.log("study backend");
// } else if(level =="three"){
//     console.log("version control");
// }else{
//     console.log("go to work");
// }

// var level = "two";
// switch(level){
//     case "one":
//         console.log("study frontend");
//         break;
//     case "two":
//         console.log("study backend");
//         break;
//     case "three":
//         console.log("version control");
//         break;
//         default:
//             console.log("go to work");
// }
// var level = "two";
// switch (true) {
//   case level == "one":
//     console.log("study frontend");
//     break;
//   case level == "two":
//     console.log("study backend");
//     break;
//   case level == "three":
//     console.log("version control");
//     break;
//   default:
//     console.log("go to work");
// }

//loops

// for( var i=0 ;  i<9  ; i++){
//     console.log("hello world");
// }

// ex

// var cartona="";
// for(var i=1900 ; i<=2030 ; i++){
//  cartona += "<option> " + i +  "</option>";
//  cartona += `   <option>   ${i}   </option> `;
// }
// document.getElementById("demo").innerHTML = cartona ;

// ex
// var cartona="";
// for(var i =1 ;  i<=100 ; i++){
//     if(i%2==0){
//         cartona += ` <h2>  even ${i} </h2>`
//     }else{
//             cartona += ` <h2>  odd ${i} </h2>`;
//     }
// }
// document.getElementById("demo").innerHTML = cartona;

//while
// var i = 0;
// while(i<10){
// console.log("hello");
// i++
// }

// var i =1;
// do{
// console.log("hello");
// }while(i<0)

//functions
// function declartion & without parameter
// function  sayHi(){
//     console.log("hi");
// }
// sayHi();       // call

// function with parmeter
// function sum(x, y) {
//   var x;
//   var y;
//   var result = x + y;
//   console.log(result);
// }
// sum(10, 20);
// console.log(sum(10, 20));

//function with return
// function sum(x, y) {
//   var x;
//   var y;
//   var result = x + y;
//   return result
// }
//  var showResult = sum(20,30);
//  console.log(showResult);

//  function calcAvg(x,y){
//     var sum1 = sum(x, y)    ;
//     var result1 = sum1/2      ;
//     console.log(result1);
//  }
//  calcAvg(10,20);

//global&local
// function say(){
//     var z =10;
//     console.log(z);
// }
// say();

// sself invoked
// (
//     function(){
//         console.log("ahmed samir");
//     }
// )();
