"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(age) {
        if (age === void 0) { age = 10; }
        this.age = age;
        this.nm = 'android';
        this.GPS_TYPE = 'satellite';
        this.nm = 'android';
    }
    Car.prototype.prntAg = function () {
        console.log("Your age is " + this.age);
    };
    Car.prototype.speedUp = function () {
    };
    Car.prototype.blowHorn = function () {
    };
    Car.prototype.geoFence = function () {
    };
    return Car;
}());
exports.Car = Car;
// let byRm = 'android'
// var cr = new Car()
