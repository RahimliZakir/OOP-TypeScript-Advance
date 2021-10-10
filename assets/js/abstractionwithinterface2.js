var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.ReturnPerimetr = function (a, b) {
        return a + b;
    };
    return Square;
}());
var s1 = new Square();
var area = s1.ReturnPerimetr(2, 3);
console.log("Perimetr: " + area);
export {};
