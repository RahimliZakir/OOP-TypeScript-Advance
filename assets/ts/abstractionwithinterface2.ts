import { Perimetr } from './abstractionwithinterface1';

class Square implements Perimetr {
    ReturnPerimetr(a: number, b: number): number {
        return a + b;
    }
}

let s1 = new Square();
let area = s1.ReturnPerimetr(2, 3);
console.log(`Perimetr: ${area}`);