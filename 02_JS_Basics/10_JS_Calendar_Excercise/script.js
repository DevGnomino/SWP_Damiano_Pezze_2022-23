startDay = 2; // 0, 1, 2, 3, 4, 5, 6
monthDays = 31;

console.log("| MO | DI | MI | DO | FR | SA | SO |");

dayCounter = 0 - startDay + 1;
tempRow = "";

for (let row = 0; row < Math.ceil((monthDays + startDay) / 7); row++) {
    tempRow = "";
    for (let col = 0; col < 7; col++) {
        if (dayCounter > 0 && dayCounter <= monthDays) {
            tempRow += "| " + String(dayCounter).padStart(2, 0) + " ";
        } else if (dayCounter <= 0 || dayCounter > monthDays){
            tempRow += "|    "; 
        }

        if(col == 6)
                tempRow += "|";

        dayCounter++;
    }
    console.log(tempRow);
}

console.log("\n----------------------------------\n");
console.log("| MO | DI | MI | DO | FR | SA | SO |");

// reset VARs
dayCounter = 0 - startDay + 1;
tempRow = "";

for (let row = 0; row < Math.ceil((monthDays + startDay) / 7); row++) {
    tempRow = "";
    for (let col = 0; col < 7; col++) {
        if (dayCounter > 0 && dayCounter <= monthDays && col < 5) {
            tempRow += "| " + String(dayCounter).padStart(2, 0) + " ";
        } else if (dayCounter > 0 && dayCounter <= monthDays && col > 4){
            tempRow += "| WE ";
        } else if (dayCounter <= 0 || dayCounter > monthDays){
            tempRow += "|    "; 
        }

        if(col == 6)
            tempRow += "|";

        dayCounter++;

    }
    console.log(tempRow);
}