// Erstelle mit Hilfe einer Schleife und Modulo das folgende Ausgabe liefert (Rechteckbeispiel adaptieren): 
// X X X X 
// O O O O 
// X X X X 
// O O O O 

for (let i = 0; i < 4; i++) {
    if (i % 2 == 0) {
        console.log("X X X X");
    } else {
        console.log("O O O O");
    }
}
console.log("------------");


// 2. Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren (zwei Lösungswege ⇒ Zähler dahingehend verändern das er nur gerade Zahlen zählt und mit Modulo arbeiten.)
let result1 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        result1 += i;
    }
}
console.log(result1);
console.log("------------");

let result2 = 0;
for (let i = 0; i <= 100; i= i + 2) {
    result2 += i;
}
console.log(result2);


// 3. Versuche mit einer for/while Schleife den Anfangsbuchstaben deines Namens auszugeben, z.B.:
// XXXX
// X   X
// X   XX
// X   X
// XXXX
