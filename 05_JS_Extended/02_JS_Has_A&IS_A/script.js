import Car from "./Car.js";
import Engine from "./Engine.js";
import SuperCar from "./SuperCar.js";

// HAS A

let c1 = new Car("Lamborghini 1");
let c2 = new Car("BMW 2");

let e1 = new Engine("1234");
let e2 = new Engine("4321");

c1.setEngine(e1);
c1.drive();

//Vererbung (IS A)

let c3 = new Car("F1");
let c4 = new SuperCar("SC1");
let e3 = new Engine("9876");

c3.setEngine(e3);
c4.setEngine(e3);

c3.drive();
c4.drive();
c4.saySomethingSuperDuper();