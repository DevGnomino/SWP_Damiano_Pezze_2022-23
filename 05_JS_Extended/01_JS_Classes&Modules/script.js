import Car from './Car.js';
import Person, { School, Animal } from './Person.js';

let c1 = new Car("red", "Ferrari", "Italy");
let c2 = new Car("silver", "Porsche");
c1.printSpecification();
c2.printSpecification();

let p1 = new Person("Mortin");
p1.sayHello();
let a1 = new Animal();
let s1 = new School();