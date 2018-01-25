var Rectangle = /** @class */ (function () {
    function Rectangle(width, length) {
        this.width = width;
        this.length = length;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}());
var rect = new Rectangle(5, 2);
console.log(rect.calcSize());
