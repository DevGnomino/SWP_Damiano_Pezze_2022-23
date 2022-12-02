//Normale Funktion
function sum(a, b) {
    return a + b;
}
//Arrow Funktion
let sum2 = (a, b) => a + b;

//Narmale Funktion
function isPositive(number) {
    return number >= 0;
}
//Arrow Funktion
let isPositive2 = number => number >= 0;

//Normale Funktion
function randomNumber() {
    return Math.random;
}
//Arrow Funktion
let randomNumber2 = () => Math.random;

//Normale Funktion
document.addEventListener("click", function () {
    console.log("click");
})
//Arrow Funktion
document.addEventListener("click", () => console.log("Click"));

class Person {
    constructor(name) {
        this.name = name;
    }

    //Die zwei Funktionen behandeln this.name anders
    printNameArrow() {
        setTimeout(() => {
            console.log("Arrow: " + this.name);
        }, 100)
    }
    printNameFunction() {
        setTimeout(function () {
            console.log("Function: " + this.name);
        }, 100)
    }
}

let person = new Person("Heinrich");
person.printNameArrow(); //Gibt Heinrich aus

person.printNameFunction(); //Gibt keinen Namen aus; In diesem Fall ist this.name 
//definiert von wo die Funktion aufgerufen wird 
//d.h. this.name ist wie hier außen (im globalen Scope) definiert
//Eine normale Funktion definiert das this-Objekt neu!
console.log(this.name); //Gibt ebenfalls nichts aus