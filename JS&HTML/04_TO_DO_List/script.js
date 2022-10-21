// alert("test");
// let, const, var

//JSON: Javascript object notation
// var task1 = { title: "putzen", isDone: false, responsible: "Martin" };
// var task2 = { title: "kochen", isDone: true, responsible: "Damiano" };

const taskArr = [];

document.getElementById("addTask").addEventListener("click", function () {
    addTask();
});


function addTask() {
    let taskText = document.getElementById("txtTask").value;
    let taskResponsible = document.getElementById("txtResponsible").value;

    let taskToAdd = { title: taskText, responsible: taskResponsible };
    taskArr.push(taskToAdd);
    printTasklist();
}

function printTasklist() {
    document.getElementById("tasklist").innerHTML = getHTMLTasks();
}

function checkTask(element) {
    let readIndex = element.attributes["data-index"].value;
    let isChecked = element.checked;

    taskArr[readIndex].isDone = isChecked;
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
            + "<br>-" + element.responsible + "</div></div></li>";

        index++;
    });

    return taskTexts;
} 