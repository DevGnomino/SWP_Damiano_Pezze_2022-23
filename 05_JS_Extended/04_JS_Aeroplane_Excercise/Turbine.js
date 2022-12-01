import Tank from "./Tank.js";

export default class Turbine {
    constructor(Intensity) {
        this.Intensity = 0;
    }

    accelerate(speed) {
        this.Intensity += speed / 80;
    }

    getIntensity(){
        return this.Intensity;
    }
}