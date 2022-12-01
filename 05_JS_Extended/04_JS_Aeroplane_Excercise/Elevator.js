export default class Elevator {
    constructor(Status) {
        this.Status = 0;
    }

    move(percentage) {
        this.Status += percentage;
    }
}