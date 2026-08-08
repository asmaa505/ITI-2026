// H4 = {
//     id : "test ",
//     class : "center",
//     ineerHtml :"hello"
// }

//select elment in html
// get elment by id
//   var getElment= document.getElementById("test");
//   console.log( typeof getElment);

// get elments by class names
//  var myElments= document.getElementsByClassName("item");
//  console.log(myElments);  // html collections

//  for(var i =0 ; i<myElments.length ; i++){
//     console.log(myElments[i]);
//  }

//  var arr= Array.from(myElments) ;

//get elment by tag name
// var tagName=  document.getElementsByTagName("h3");
// console.log(tagName);         //html collections

// get elment name
//  var name =document.getElementsByName("gender");
//  console.log(name);    // nodelist

// queryselector all     node list
//   var query= document.querySelectorAll(".item");
//   console.log(query);
//  document.querySelectorAll("#test")
//  document.querySelectorAll("[name=gender]")
//  document.querySelectorAll("div>h3")
//  document.querySelectorAll(".item h3")
//  document.querySelectorAll("h3")
//  document.querySelectorAll("*")

//query selector

//   var query= document.querySelector(".item");
//   console.log(query
//   );

// special
// document.body
// document.images
// document.forms
// document.links
// document.title

//change content
// var h1= document.getElementById("demo");
// console.log(h1);
// h1.innerHTML = "fullstack";
// h1.innerHTML = "<button> click  </button>";
// h1.innerText = "fullstack";
// h1.innerText = "<button> click  </button>";

//change style

//  var change =document.getElementById("demo");
//  change.style.color = "red";
//  change.style.backgroundColor ="green";
// change.style.cssText = `
// color: red;
// background-color : blue ;
// text-align : center;
// `

//dealing with classes add,remove,replace,containes,toggle

var content = document.getElementById("demo");

// content.classList.remove("bg-danger");
// content.classList.add("text-info");
// content.classList.replace("bg-danger" , "bg-info");
// console.log(content.classList.contains("bg-danger"));

// content.addEventListener('click',function(){
    
//     content.classList.toggle("bg-danger")
// })

// dealing with attributes (set ,get)

// var img=document.getElementById("img");

// img.addEventListener( 'click', function(){
    // img.setAttribute("alt", "ahmed samir");
    // console.log(img.getAttribute("src"));
    // console.log(img.hasAttribute("alt"));
    // console.log(img.removeAttribute("alt"));
    // img.src  // get
    // img.src = "./images/crs1.jpg";    //set
// })


//create elment

// var img = document.createElement('img');   // <img>
// img.setAttribute("src", "./images/crs1.jpg"); //<img src="./images/crs1.jpg">
// img.setAttribute("alt" , "ahmed") //<img src="./images/crs1.jpg" alt="ahmed">
// document.body.append(img);

//traversing
var section= document.getElementById("test");

section.addEventListener('click', function(){
    //children
// console.log(section.children[0]);
// console.log(section.childNodes[0]);
// section.children[0].style.color = 'blue'
// section.firstElementChild.style.color = 'green'
// section.lastElementChild.style.color = 'blue'
//sibliing
// section.nextElementSibling.style.color= 'blue'
// section.previousElementSibling.style.color= 'yellow'
//parent
// section.parentElement.style.backgroundColor = 'pink'
// section.closest('body');
})