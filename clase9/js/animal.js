"use strict";
var Animal = /** @class */ (function () {
    function Animal(cantidadPatas) {
        this.cantidadPatas = cantidadPatas;
    }
    Animal.prototype.quienSoy = function () {
        console.log("soy un animal");
    };
    Object.defineProperty(Animal.prototype, "getPatas", {
        get: function () {
            return this.cantidadPatas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "setPatas", {
        set: function (patas) {
            this.cantidadPatas = patas;
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
