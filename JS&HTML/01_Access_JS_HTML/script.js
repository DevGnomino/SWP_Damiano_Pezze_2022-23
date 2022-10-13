
// let element = document.getElementById("superDiv");
// element.innerHTML = "Super Ding";
// console.log(element);

// document.getElementById("superDiv").innerHTML = "Tolles Ding";
var result = 0;

function addition(a, b) {
    result = a + b;
    return result;
}
function subtraction(a, b) {
    result = a - b;
    return result;
}
function multiply(a, b) {
    result = a * b;
    return result;
}
function divide(a, b) {
    result = a / b;
    return result;
}

function btnClicked() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    var operation = document.getElementById("operation").value;
    console.log(num1 + ", " + num2);
    console.log(operation);
    let returnResult = 0;

    switch(operation){
        case "addition":
            returnResult = addition(num1, num2);
            break;
        case "subtraction":
            returnResult = subtraction(num1, num2);
            break;
        case "multiplication":
            returnResult = multiply(num1, num2);
            break;
        case "division":
            returnResult = divide(num1, num2);
            break;
        default:
            console.log("Something went wrong!");
    }

    console.log(returnResult);
    document.getElementById("resultDiv").innerHTML = "Result: " + returnResult;
}
