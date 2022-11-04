// erstelle eine Variable number
let random = Math.random() //Returns number between 0 and 1
console.log(random);
random = Math.random() * 1000 //Returns number between 0 and 1000
console.log(random);
let randomAsInt = Math.round(random);
console.log(randomAsInt);

let number = Math.round(Math.random() * 70); //returns random number from 0 to 70

// Aufgabe 1
// Wenn die Zahl kleiner ist als 20  gib aus "Mini"
// Wenn die Zahl zw. 20 und 50 ist gib aus "Medium"
// Wenn die Zahl größer als 50 ist gib aus "Large"
if (number < 20){
    console.log("("+number+") Mini");
} else if (number >= 20 && number <= 50) {
    console.log("("+number+") Medium");
} else {
    console.log("("+number+") Large");
}

// Aufgabe 2
// Wenn die Zahl kleiner gleich 7 ist gib aus "Mini"
// Wenn die Zahl zwischen 7 und 90 ist gib  aus "Medium"
// Wenn die Zahl größer als 90 ist gib aus "Large"
console.log("------------");
number = Math.round(Math.random() * 100); //returns random number from 0 to 100

if (number <= 7){
    console.log("("+number+") Mini");
} else if (number >= 7 && number <= 90) {
    console.log("("+number+") Medium");
} else {
    console.log("("+number+") Large");
}
