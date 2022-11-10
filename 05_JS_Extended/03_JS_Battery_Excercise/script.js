import Remote from "./Remote.js";

let r1 = new Remote();
let r2 = new Remote(true);

r1.turnOn();
console.log(r1.getStatus());
console.log(r1.hasPower());
r1.turnOff();
r1.turnOn();
r1.turnOn();
console.log(r1.getStatus());
console.log(r1.hasPower());

console.log(r2.getStatus());