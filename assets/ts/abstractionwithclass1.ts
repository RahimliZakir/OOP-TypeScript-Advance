export abstract class AreaPrinter {
    abstract printArea(a: number, b: number): number;

    print(msg: string): void {
        console.log(msg);
    }
}