// 1

let books = [
    { title: "بين القصرين", author: "نجيب محفوظ", pages: 432, available: true },
    { title: "المغالطات المنطقية", author: "عادل مصطفى", pages: 470, available: false },
    { title: "أولاد حارتنا", author: "نجيب محفوظ", pages: 550, available: true },
    { title: "عزوز", author: "زياد رحباني", pages: 180, available: true },
    { title: "اللص والكلاب", author: "نجيب محفوظ", pages: 195, available: false },
    { title: "الإنسان ورتوزه", author: "كارل يونغ", pages: 432, available: true }
];

let bookCard = document.getElementById("bookSection");

for (let i = 0; i < books.length; i++) { 

    bookCard.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card h-100 shadow-sm">
                <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5 class="card-title text-primary fs-4">${books[i].title}</h5>
                        <p class="card-text mb-1"><strong>المؤلف:</strong> ${books[i].author}</p>
                        <p class="card-text mb-2"><strong>عدد الصفحات:</strong> ${books[i].pages}</p>
                        <p class="card-text mb-2"><strong>الحالة:</strong> ${books[i].available ? "متاح" : "غير متاح"}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}


// 2
const myInput = document.getElementById("myInput");

myInput.addEventListener("keydown", function(e) {
    console.log(e);
    alert("Pressed key code: " + e.code);
});


let key; 
myInput.addEventListener("mousedown", function(e) {
    if (e.button === 0) { key = "Left Click";} 
    else if (e.button=== 1) {key = "Middle Click";} 
    else if (e.button === 2) {key = "Right Click";}
    alert("Mouse button code: " + key);
});


// 3
let timer;
let startBtn = document.getElementById("startBtn");
let clockDisplay = document.getElementById("clockDisplay");

startBtn.onclick = function() {
    alert("Clock Started");
    
    timer = setInterval(function() {
        clockDisplay.innerText = new Date().toLocaleTimeString();
    }, 1000);
};

document.onkeydown = function(e) {
    if (e.altKey && e.key === "w") {
        clearInterval(timer);
        alert("Clock stopped");
    }
};



// 5
let firstNameInput = document.getElementById("firstName");

firstNameInput.addEventListener("keydown", function(e) {
    if (e.keyCode < 65 || e.keyCode > 90) {
        e.preventDefault(); 
    }
});