// alert("test");
// let, const, var

//JSON: Javascript object notation
// var task1 = { title: "putzen", isDone: false, responsible: "Martin" };
// var task2 = { title: "kochen", isDone: true, responsible: "Damiano" };

const taskArr = [];

document.getElementById("addTask").addEventListener("click", function () {
    addTask();
    //Clear Textfields
    document.getElementById("txtTask").value = "";
    document.getElementById("txtResponsible").value = "";
    document.getElementById("txtTask").focus();
});


function addTask() {
    let taskText = document.getElementById("txtTask").value;
    let taskResponsible = document.getElementById("txtResponsible").value;

    if (taskText == "" || taskResponsible == "") {
        alert("Please enter both fields!");
    } else {
        let taskToAdd = { title: taskText, responsible: taskResponsible };
        taskArr.push(taskToAdd);
        printTasklist();
    }
}

function printTasklist() {
    document.getElementById("tasklist").innerHTML = getHTMLTasks();
}

function checkTask(element) {
    let readIndex = element.attributes["data-index"].value;
    let isChecked = element.checked;

    taskArr[readIndex].isDone = isChecked;
}

function deleteTask(element) {
    let readIndex = element.attributes["data-index"].value;

    taskArr.splice(readIndex, 1);
    printTasklist();
}

function getHTMLTasks() {
    let taskTexts = "";
    let index = 0;
    let checked = ""

    taskArr.forEach(element => {
        if (element.isDone) { checked = "checked"; }
        else { checked = ""; }

        taskTexts += "<li><div class='ListElement'><div class='ListElementCheck'>"
            + "<input onClick='checkTask(this)' name='checkbox' type='checkbox' data-index='"
            + index + "' " + checked + "></div><div class='ListElementContent'>" + element.title
            + "<br>- " + element.responsible + "</div><div class='ListElementDelete'>"
            + "<img src='https://cdn-icons-png.flaticon.com/512/860/860829.png' alt='delete'"
            + "onClick='deleteTask(this)' role='button' data-index='" + index + "'/></div></div></li>";

        index++;
    });

    return taskTexts;
} 