import { AreaPrinter } from './abstractionwithclass1';

class Quadrangular extends AreaPrinter {
    printArea(a: number, b: number): number {
        return a * b;
    }
}

let q1 = new Quadrangular();
let area = q1.printArea(5, 7);
console.log("Area " + area);
q1.print("İş bitti");