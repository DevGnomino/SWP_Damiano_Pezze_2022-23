import Battery from "./Battery.js";

export default class Remote {
    constructor(isOn = false) {
        this.isOn = isOn;
        this.battery1 = new Battery();
        this.battery2 = new Battery();
    }

    getStatus() {
        let avgChargingStatus = (this.battery1.chargingStatus + this.battery2.chargingStatus) / 2;
        return avgChargingStatus;
    }

    turnOff() {
        if (this.isOn) {
            this.isOn = false;
            console.log("The Remote has been turned off");
        } else {
            console.log("The Remote is already off");
        }
    }

    turnOn() {
        if (!this.isOn) {
            this.isOn = true;
            this.battery1.chargingStatus -= 5;
            this.battery2.chargingStatus -= 5;
            console.log("The Remote has been turned on");
        } else {
            console.log("The Remote is already on");
        }
    }

    hasPower() {
        let avgChargingStatus = (this.battery1.chargingStatus + this.battery2.chargingStatus) / 2;

        if (avgChargingStatus > 50) {
            return true;
        } else { return false; }
    }
}