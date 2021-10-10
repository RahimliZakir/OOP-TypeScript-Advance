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
import { Person } from './inheritance1.js';
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(ad, soyad, yash, type) {
        var _this = _super.call(this, ad, soyad, yash) || this;
        _this.type = type;
        return _this;
    }
    return Developer;
}(Person));
var p1 = new Developer("Zakir", "Rəhimli", 19, "Full-Stack");
console.log(p1.name + ", " + p1.surname + ", " + p1.age + ", " + p1.type);
