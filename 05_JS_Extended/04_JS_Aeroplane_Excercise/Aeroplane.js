import Turbine from "./Turbine.js";
import Tank from "./Tank.js";
import Elevator from "./Elevator.js";
import SideRudder from "./SideRudder.js";

export default class Aeroplane {
    constructor(turbine1, turbine2, turbine3, turbine4, tank, elevator, siderudder) {
        this.turbine1 = new Turbine();
        this.turbine2 = new Turbine();
        this.turbine3 = new Turbine();
        this.turbine4 = new Turbine();
        this.tank = new Tank();
        this.elevator = new Elevator();
        this.siderudder = new SideRudder();
    }

    accelerate(speed) {
        this.turbine1.accelerate(speed);
        this.turbine2.accelerate(speed);
        this.turbine3.accelerate(speed);
        this.turbine4.accelerate(speed);
        if (speed > 0) {
            let tankConsumption = (speed / 80) * 4;
            this.tank.Status -= tankConsumption;
        }
    }

    up(percentage) {
        this.elevator.move(percentage);
    }
    down(percentage) {
        this.elevator.move(-percentage);
    }

    left(percentage) {
        this.siderudder.move(-percentage);
    }
    right(percentage) {
        this.siderudder.move(percentage);
    }

    getFuelStatus() {
        return this.tank.Status;
    }
    printFlightPosition() {
        if (this.siderudder.Status === 0) {
            console.log("The plane is not changing direction");
        } else if (this.siderudder.Status < 0) {
            console.log("The plane is steering " + (this.siderudder.Status) * (-1) + "% to the left");
        } else {
            console.log("The plane is steering " + this.siderudder.Status + "% to the right");
        }

        if (this.elevator.Status === 0) {
            console.log("The plane is not changing altitude");
        } else if (this.elevator.Status < 0) {
            console.log("The plane is steering " + (this.elevator.Status) * (-1) + "% down");
        } else {
            console.log("The plane is steering " + this.elevator.Status + "% up");
        }
    }
}

