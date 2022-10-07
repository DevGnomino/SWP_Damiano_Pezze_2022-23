// Erstelle eine Variable banana mit dem Wert "Banane"
// Erstelle eine Variable apple mit dem Wert "Apple"
let banana = "Banane";
let apple = "Apple";

// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43
let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo
let avgAppleWeight = 0.34;
let avgBananaWeight = 0.22;

// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel
applesPerKilo = 1 / avgAppleWeight;
bananasPerKilo = 1 / avgBananaWeight;
console.log(applesPerKilo + " Äpfel pro Kilo");
console.log(bananasPerKilo + " Bananen pro Kilo");

pricePerApple = applePricePerKilo * avgAppleWeight;
pricePerBanana = bananaPricePerKilo * avgBananaWeight;
console.log("Preis pro Apfel: " + pricePerApple);
console.log("Preis pro Banane: " + pricePerBanana);

// Preis von 8 Äpfeln
console.log("Preis von 8 Äpfeln: " + 8 * pricePerApple);
// Preis von 17 Bananen
console.log("Preis von 17 Bananen: " + 17 * pricePerBanana);
// Preis von 1 Tonne Äpfel
console.log("Preis von 1 Tonne Äpfel: " + 1000 * applePricePerKilo);
// Preis von 1 Tonne Bananen
console.log("Preis von 1 Tonne Bananen: " + 1000 * bananaPricePerKilo);

