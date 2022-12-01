import Aeroplane from "./Aeroplane.js";

let Aeroplane1 = new Aeroplane();

Aeroplane1.accelerate(350);
Aeroplane1.up(10);
Aeroplane1.left(5);

console.log(Aeroplane1.getFuelStatus());
Aeroplane1.printFlightPosition();

Aeroplane1.accelerate(-50);
Aeroplane1.down(15);
Aeroplane1.right(5);
console.log(Aeroplane1.getFuelStatus());
Aeroplane1.printFlightPosition();

