// Erstelle zwei Zufallszahlen zwischen 0 und 100
random1 = Math.round(Math.random() * 100);
random2 = Math.round(Math.random() * 100);

console.log(random1, random2);
// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini"
if (random1 < random2 && random1 < 50) {
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini");
}

// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30
// dann gib aus "Eine der beiden ist kleiner als 30"
if (random1 < 30 || random2 < 20) {
    console.log("Eine der beiden ist kleiner als 30");
}

// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist
// dann gib aus "Erste Zahl klein, zweite kein 50iger"
if (random1 < 50 && random2 != 50) {
    console.log("Erste Zahl klein, zweite kein 50iger");
}

// 1. Der Fahrer darf das Motorrad fahren, wenn er 24 Jahre oder älter ist oder den Motorradführerschein besitzt 
// aber nicht mehr in der Probezeit ist.
let alter = 24;
let fuehrerschein = true;
let probezeit = false;

if (alter >= 24 && fuehrerschein == true && probezeit == false){
    console.log("Fahren erlaubt");
} else{
    console.log("Fahren unerlaubt");
}

// 2. Das Kind darf den Kinofilm sehen, wenn es älter als 14 ist oder einen Elternteil mit dabei hat. 
let kindalter = 14;
let elternteil = false;

if (kindalter >= 14 || elternteil == true){
    console.log("Film erlaubt");
} else{
    console.log("Film unerlaubt");
}

// 3. Wenn ich den Kurs “Softwarearchitekturen” besuchen möchte, muss ich den Coding Campus besucht haben oder bereits 2 
// Jahre Berufserfahrung vorweisen.
codingcampus = true;
berufserfahrungJahre = 1;

if (berufserfahrungJahre >= 2 || codingcampus == true){
    console.log("Kurs Softwarearchitekturen erlaubt");
} else{
    console.log("Kurs Softwarearchitekturen unerlaubt");
}

// 4. Der Bewerber hat eine Chance auf eine Anstellung wenn er bereits über 5 Jahre Erfahrung vorweist oder einen Master 
// Abschluss besitzt und auf jeden Fall eine einwandfreies Leumundszeugnis besitzt.
erfahrungJahre = 3;
master = true;
LeumungszeugnisEinwandfrei = true;

if ((erfahrungJahre >= 5 || master == true) && LeumungszeugnisEinwandfrei == true){
    console.log("Chance auf Anstellung");
} else{
    console.log("Keine Chance auf Anstellung");
}
