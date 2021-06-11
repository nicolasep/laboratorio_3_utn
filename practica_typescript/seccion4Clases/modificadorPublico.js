"use strict";
var Animal = /** @class */ (function () {
    function Animal(nombre, tamanio) {
        this.nombre = nombre;
        this.tamanio = tamanio;
    }
    Animal.prototype.moverse = function () {
        console.log("me estoy moviendo");
    };
    return Animal;
}());
var obj = new Animal("serpiente", 2);
