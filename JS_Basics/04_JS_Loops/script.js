// Zähle von 7 bis 45
for (let i = 7; i <= 45; i++) {
    console.log(i);
}
console.log("-------------------------------------");

// Zähle von 9 bis 99
for (let i = 9; i < 100; i++) {
    console.log(i);
}
console.log("-------------------------------------");

// Zähle rückwärts von 10 bis 0
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
console.log("-------------------------------------");

// Zähle rückwärts von 1234 bis 1207
for (let i = 1234; i >= 1207; i--) {
    console.log(i);
}
console.log("-------------------------------------");

// Gib Deinen Namen genau 8 mal aus
for (let count = 0; count < 8; count++) {
    console.log("Damiano");
}
console.log("-------------------------------------");

// Zähle von 0 auf 10, dann gib Deinen Namen aus, dann zähle von 10 auf 0
for (let i = 0; i <= 10; i++) {
    console.log(i);
    if(i == 10)
    {
        console.log("Damiano");
        for(let j = 10; j >= 0; j--){
            console.log(j);
        }
    }
}
console.log("-------------------------------------");
