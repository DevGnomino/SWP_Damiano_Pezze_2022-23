function generate() {
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);
    console.log("min: " + min + ", max: " + max);

    let number = Math.round(Math.random() * (max - min) + min);
    console.log(number);

    document.getElementById("result").innerHTML = number;
}