
//object

// var name = "ahmed";
// var age = 30;
// var isMarried =true;

var user = {
    name : "ahmed",  //x
    age : 30 ,
    isMarried:true,
    son:{
        name:"mohamed",
        age:10
    }
}
//access date  dot&bracket
//show date
// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.son);
// console.log(user.son.name);
//change
// user.name = "mazwn";
// console.log(user);
//add
// user.lastName ="samir";
// console.log(user);
//remove
// delete user.age;
// console.log(user);

//bracket
//show data
// console.log(user["name"]);
//change
// user["age"] =40 ;
// console.log(user);
//add
// user["salary"]= 10000;
// console.log(user);
//remove
// delete user["age"]
// console.log(user);

//loop object
// let text=""
// for(let x in user){
// text+= user[x] +" "
// }
// console.log(text);


//arr

//show date
// console.log(arr);

//loop
// for(var i=0 ; i<arr.length ; i++){
    //     console.log(arr[i]);
    // }
    
    var num =[100,55,90,8,56,32];
    //          0          1        2        3       4          5
    var arr =["ahmed" , "mohamed" ,"nour" ,"zeyad" ,"ahmed" ,"menna"];

    // methods
// console.log(num.sort());
// console.log(arr.reverse());
// console.log(arr.pop());        //remove last item in arr
// console.log(arr.push("haydi"));        //add last item in arr
// console.log(arr.shift());        //remove first  item in arr
// console.log(arr.unshift("samir"));        //add first  item in arr
// console.log(arr.splice(4,1));                  //remove    
// console.log(arr.splice(2,0,"taha"));                  //add    
// console.log(arr.includes("ahmed"));                  //  search  true , false
// console.log(arr.indexOf("ahmed"));                  //  returen index from firest
// console.log(arr.lastIndexOf("ahmed"));                  //  returen index from last
// console.log(arr.toString());                  //  returen array as string
// console.log(arr.join("*"));                  //  returen array as string
// console.log(arr.slice(1,4));                  //  returen a part with start ,end
// console.log(arr.at(-1));                  //  take index , return item , start eith 0 , end with -1

// arr.length - 1 

// console.log(arr);


//string 
//          01234567890123
var text = " ahmed samir rady ";
var text1 ="hi";
// console.log(text.charAt(0));
// console.log(text.indexOf("h"));
// console.log(text.lastIndexOf("a"));
// console.log(text.substring(0,5));
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());
// console.log(text.trim());
// console.log(text.trimStart());
// console.log(text.trimEnd());
// console.log(text.includes("ahmed"));
// console.log(text.split(" "));
// console.log(text.concat(text1));
// console.log(text.replace("a" , "z"));
// console.log(text.replaceAll("a" , "z"));
// console.log(text.length);


//number             
var num = 123.12345 ;

// console.log(num);
// console.log( typeof num.toString());
// console.log(num.toExponential());          //10,000 1*10
// console.log(num.toFixed(2));           // detect number after dot   
// console.log(num.toPrecision(3));           // detect number from first  
// console.log(num.valueOf());           // detect number from first  
// console.log(Number.isNaN(12344));           // TRUE OR FALSE 
// console.log(Number.isInteger());           // TRUE OR FALSE 
// console.log(Number.isFinite(242424));           // TRUE OR FALSE 

// var age = Number("AHMED");
// if(Number.isNaN(age)){
//     console.log("invalid");
// }

//date

var myDate = new Date();
console.log(myDate.toLocaleString());

//booolean
var ismarried = new Boolean();
ismarried = true;


//regular exprission

let email = window.prompt("enter your mail");
let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(pattern.test(email));
