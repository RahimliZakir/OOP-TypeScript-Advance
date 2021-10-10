var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AreaPrinter } from './abstractionwithclass1.js';
var Quadrangular = /** @class */ (function (_super) {
    __extends(Quadrangular, _super);
    function Quadrangular() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Quadrangular.prototype.printArea = function (a, b) {
        return a * b;
    };
    return Quadrangular;
}(AreaPrinter));
var q1 = new Quadrangular();
var area = q1.printArea(5, 7);
console.log("Area " + area);
q1.print("İş bitti");
