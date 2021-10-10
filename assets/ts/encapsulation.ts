export class Person {
    name: string;
    surname: string;

    private _age: number;

    get age(): number {
        return this._age;
    }
    set age(value: number) {
        if (value < 18) {
            throw new Error("Yaş 18-dən kiçik ola bilməz!");
        }

        this._age = value;
    }
}

let p1 = new Person();
p1.name = "Zakir";
p1.surname = "Rəhimli";
p1.age = 19;

console.log(`${p1.name}, ${p1.surname}, ${p1.age}`);