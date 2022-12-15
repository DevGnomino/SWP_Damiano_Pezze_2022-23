// let myName = "Damiano";

// function printName() {
//     console.log(myName);
// }

// myName = "Mortin";
// printName(); // Gibt Martin und nicht Damiano aus

// myName = "Kathi";
// printName();

function outerFunc(outerVar) {
    const outerVar2 = "Hola";
    return function innerFunc(innerVar) {
        console.log("Outer Variable: " + outerVar);
        console.log("Inner Variable: " + innerVar);
        console.log(outerVar2);
    }
}

const newFunc = outerFunc("outside");
newFunc("inside");
// Die innere Funktion kann die äußere Variable wegen Closures auslesen
// Sie merkt sich die Variable

// Kurz Erklärt:
/* Wenn man eine Funktion innerhalb einer anderen Funktion 
definiert hat. Dann hat die innere Funktion Zugriff auf den
Scope und die Variablen der äußeren Funktion, auch wenn die
äußere Funktion nicht mehr läuft und die Variablen außerhalb
nicht mehr Zugreifbar sind.
*/