export default class SideRudder {
    constructor(Status) {
        this.Status = 0;
    }

    move(percentage) {
        this.Status += percentage;
    }
}