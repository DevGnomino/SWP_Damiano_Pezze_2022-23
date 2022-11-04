export default class Engine{
    constructor(serialnumber){
        this.serialnumber = serialnumber;
    }

    go(){
        console.log("I am running " + this.serialnumber);
    }
}