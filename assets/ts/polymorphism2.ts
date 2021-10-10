import { Human } from './polymorphism1';

class Person extends Human {
    override getName(): string {
        return "Name is 'Person'.";
    }
}

let p1: Human = new Person();
let personName = p1.getName();
console.log(`PERSON --- ${personName}`);

let h1: Human = new Human();
let humanName = h1.getName();
console.log(`HUMAN --- ${humanName}`);