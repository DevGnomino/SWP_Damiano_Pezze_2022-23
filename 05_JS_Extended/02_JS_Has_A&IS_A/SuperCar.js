import Car from "./Car.js";

//Vererbung
export default class SuperCar extends Car{
    saySomethingSuperDuper(){
        console.log("super car");
    }
}