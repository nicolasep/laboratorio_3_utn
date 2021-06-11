"use strict";
var vehiculo = /** @class */ (function () {
    function vehiculo(marca_, fecha_, puertas_) {
        this.marca = marca_;
        this.fecha = fecha_;
        this.puertas = puertas_;
    }
    vehiculo.prototype.acelerar = function () {
        console.log("acelero");
    };
    vehiculo.prototype.frenar = function () {
        console.log("freno");
    };
    return vehiculo;
}());
var coche = new vehiculo("Ford", "12/7/2018", 4);
console.log(coche.marca);
console.log(coche.fecha);
coche.acelerar();
