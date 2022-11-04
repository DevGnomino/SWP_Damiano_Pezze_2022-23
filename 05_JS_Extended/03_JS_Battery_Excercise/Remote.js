import Battery from "./Battery.js";

export default class Remote{
    constructor(ison = false){
        this.ison = ison;
    }

    getStatus(){
    
    }

    turnOff(){

    }

    turnOn(){

    }

    hasPower(capacity1, capacity2) {
        let avgCapacity = (capacity1 + capacity2) / 2;

        if (avgCapacity > 50) {
            return true;
        } else { return false; }
    }

}