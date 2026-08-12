// var arr =["ahmed","nour"];
// var num =[1,2,3];
// var user ={
//     name:"ahmed",
//     age : 20
// }
// date from db
// var productList =[
//     {name:"iphone" , price:2000 ,category :"mobile" ,onSale:true},
//     {name:"tv" , price:5000 ,category :"mobile" ,onSale:true},
//     {name:"samsung" , price:6000 ,category :"mobile" ,onSale:false},
//     {name:"dell" , price:8000 ,category :"mobile" ,onSale:true},
// ]

//loop array
// var cartona=""
// for (var i = 0; i < productList.length; i++) {
//   cartona += `
//                 <div class="col-md-3">
//                 <div class="card text-center">
//                     <h3> ${productList[i].name}</h3>
//                     <div class="card">
//                         <p>${productList[i].price}</p>
//                         <p>${productList[i].category}</p>
//                         <p>${productList[i].onSale}</p>
//                     </div>
//                 </div>
//                 </div>
//     `;
// }
// document.getElementById("rowData").innerHTML = cartona;

// error handle
// try{
// console.log(hamada);
// }catch(error){
// console.log(error);
// }finally{
    
// }

// if(age <=18){
//     throw new Error("age greater than 18");
// }


// WINDOW

// console.log(window.innerHeight);
// console.log(window.outerHeight);
// console.log(window.innerWidth);
// console.log(window.outerWidth);
// alert(window.screenX);
// alert(window.screenY);
// alert(window.scrollY);
// alert(window.scrollX);

//methods
//open close
//  var win;
// function openWindow(){
//     //            url              target          propites
//  win =window.open( 'http://google.com' ,'_Blanck'  ,'width:500px,height:400px,screenTop:500px,screenLeft:400px'                    )
// }

// function closeWindow(){
// win.close();
// }

// setinterval&settime
// function show(){
//     console.log("hello");
// }

// setInterval(show,1000);
// var count=0;
//  var counter =setInterval(  function(){
//     count++;
//     console.log(count);
//     if(count==100){
//         clearInterval(counter);
//     }
// }     ,   100   )

// setTimeout(  function(){
//     console.log("hi");
// }   ,5000       )

//screen
// console.log(window.screen.availHeight);
// console.log(window.screen.availWidth);
// console.log(window.screen.width);
// console.log(window.screen.height);
// console.log(window.screen.colorDepth);
// console.log(window.screen.pixelDepth);


//navigoter
// console.log(window.navigator.appName);
// console.log(window.navigator.appVersion);
// console.log(window.navigator.language);
// console.log(window.navigator.platform);
// console.log(window.navigator.cookieEnabled);
// console.log(window.navigator.geolocation);

//location
// alert(location.href);


// events
// var myElment=document.getElementById("test");

// document.addEventListener("keypress", function (e) {
//   console.log(e.target);
// });


// event Bubbling
// var body=document.body;
// var section = document.getElementById("section");
// var div = document.getElementById("div");
// var btn = document.getElementById("btn");

// btn.addEventListener('click',function(e){
//     // e.stopPropagation();
//     console.log("hi from btn");
// },false)
// div.addEventListener('click',function(){
//     console.log("hi from div");
// })
// section.addEventListener('click',function(){
//     console.log("hi from section");
// })
// body.addEventListener('click',function(){
//     console.log("hi from body");
// })
//event caputring
// var body = document.body;
// var section = document.getElementById("section");
// var div = document.getElementById("div");
// var btn = document.getElementById("btn");
// //addEventListner('event',action,true&false)
// btn.addEventListener("click", function () {
//   console.log("hi from btn");
// },true);
// div.addEventListener("click", function () {
//   console.log("hi from div");
// },true);
// section.addEventListener("click", function () {
//   console.log("hi from section");
// },true);
// body.addEventListener("click", function () {
//   console.log("hi from body");
// },true);