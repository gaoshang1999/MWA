var Person = /** @class */ (function () {
    function Person(_firstName, enumerable, configurable) {
        if (enumerable === void 0) { enumerable = true; }
        if (configurable === void 0) { configurable = true; }
        this._firstName = _firstName;
        this.enumerable = enumerable;
        this.configurable = configurable;
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value.toUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var p = new Person('ShangGao');
console.log(p.firstName);
p.firstName = 'NewName';
console.log(p.firstName);
