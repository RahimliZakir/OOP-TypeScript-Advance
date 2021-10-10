import { Person } from './inheritance1';

class Developer extends Person {
    type: string;

    constructor(ad: string, soyad: string, yash: number, type: string) {
        super(ad, soyad, yash);
        this.type = type;
    }
}

let p1 = new Developer("Zakir", "Rəhimli", 19, "Full-Stack");
console.log(`${p1.name}, ${p1.surname}, ${p1.age}, ${p1.type}`)