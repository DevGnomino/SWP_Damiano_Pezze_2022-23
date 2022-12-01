if (true) {
    var varVar = "This is true";
}
console.log(varVar);

if (true) {
    let letVar = "This is true";
}
console.log(letVar);

if (true) {
    const constVar = "This is true";
}
console.log(constVar);


// var Variable kann verwendet werden, bevor sie deklariert wird
// sie wird dann als undefined ausgegeben
console.log(varVariable);
var varVariable = "true";
// mit let Variablen ist das nicht möglich

// const und let sind eigentlich genau gleich, 
// nur dass bei const der Wert nicht geändert werden kann -> Konstante

// const erlaubt es jedoch, die Eigenschaften des Wertes zu ändern
const constVariable = { name: "Damiano" };
constVariable.name = "Martin";