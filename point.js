"use strict";
exports.__esModule = true;
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.drawPoint = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point;
}());
exports.Point = Point;
