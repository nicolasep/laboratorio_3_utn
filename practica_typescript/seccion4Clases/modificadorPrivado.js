"use strict";
var Animal2 = /** @class */ (function () {
    function Animal2(nombre, tamanio) {
        this.nombre = nombre;
        this.tamanio = tamanio;
    }
    Animal2.prototype.moverse = function () {
        console.log("me estoy moviendo");
    };
    return Animal2;
}());
var obj2 = new Animal2("serpiente", 2);
