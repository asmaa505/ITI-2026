// 1
let nameInput = document.getElementById("nameInput");
let gradeInput = document.getElementById("gradeInput");
let addBtn = document.getElementById("addBtn");
let tbody = document.getElementById("tbody");
let errorBox = document.getElementById("errorBox");

let students = [];
let nextId = 1;


// 3
function createStudent(id, name, grade) {
    return {
        id: id,
        name: name,
        grade: grade,
        getStatus: function () {
            return this.grade >= 50 ? "Pass" : "Fail";
        }
    };
}

// 6
function validateInput(name, gradeText) {
    if (name.trim() === "") {
        throw new Error("Name cannot be empty.");
    }
    
    if (gradeText.trim() === "") {
        throw new Error("Grade cannot be empty.");
    }

    let grade = Number(gradeText);
    if (isNaN(grade)) {
        throw new Error("Grade must be a valid number.");
    }

    if (grade < 0 || grade > 100) {
        throw new Error("Grade must be between 0 and 100.");
    }

    return grade;
}

// 8
function showStudeRow(student) {
    let tr = document.createElement("tr");
    let status = student.getStatus();

    tr.innerHTML = `
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.grade}</td>
        <td>${status}</td>
    `;

    tbody.appendChild(tr);
}

// 4
addBtn.addEventListener("click", function () {
    errorBox.innerText = "";

    try {
        // 5
        let name = nameInput.value;
        let gradeText = gradeInput.value;

        let grade = validateInput(name, gradeText);

        // 7
        let student = createStudent(nextId, name, grade);
        students.push(student);
        nextId++;

        // 8
        showStudeRow(student);

        // 9
        nameInput.value = "";
        gradeInput.value = "";

    } catch (error) {
        // 10
        errorBox.innerText = "Error: " + error.message;
    }
});