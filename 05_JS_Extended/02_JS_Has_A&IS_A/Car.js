import Engine  from "./Engine.js";

export default class Car{

    constructor(name){
        this.name = name;
    }

    setEngine(engine){
        this.engine = engine;
    }

    drive(){
        console.log("I am starting to drive");
        this.engine.go();
    }
}