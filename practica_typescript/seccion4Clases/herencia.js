"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Padre = void 0;
var Padre = /** @class */ (function () {
    function Padre(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Padre.prototype.mostrarNombre = function () {
        console.log(this.nombre);
    };
    return Padre;
}());
exports.Padre = Padre;
