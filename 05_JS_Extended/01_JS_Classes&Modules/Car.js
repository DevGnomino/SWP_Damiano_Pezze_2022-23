export default class Car {
    //Instanzvariable
    horsepower = 150;

    constructor(color, brand, country = "Germany") {
        this.color = color;
        this.brand = brand;
        this.country = country;
    }

    printSpecification() {
        console.log(this.color + " - " + this.brand + " - " + this.horsepower + " - " + this.country);
    }
}

