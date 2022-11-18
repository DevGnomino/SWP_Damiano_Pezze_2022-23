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

    }

    up(percentage) {

    }
    down(percentage) {

    }
    left(percentage) {

    }
    right(percentage) {

    }
}

