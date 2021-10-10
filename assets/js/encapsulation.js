var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value < 18) {
                throw new Error("Yaş 18-dən kiçik ola bilməz!");
            }
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
export { Person };
var p1 = new Person();
p1.name = "Zakir";
p1.surname = "Rəhimli";
p1.age = 19;
console.log(p1.name + ", " + p1.surname + ", " + p1.age);
