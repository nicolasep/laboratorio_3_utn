"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(cantidadPatas) {
        this.cantidadPatas = cantidadPatas;
    }
    Animal.prototype.quienSoy = function () {
        console.log("soy un animal");
    };
    return Animal;
}());
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(cantidadPatas, vidas) {
        var _this = _super.call(this, cantidadPatas) || this;
        _this.vidas = vidas;
        return _this;
    }
    Gato.prototype.quienSoy = function () {
        console.log("soy un gato");
    };
    return Gato;
}(Animal));
var Main = /** @class */ (function () {
    function Main(nombre) {
        this.nombre = nombre;
    }
    Main.prototype.handleEvent = function (ev) {
        //alert(`hola mundo soy ${this.nombre}`);
        // this.contar();
        var listaAnimales = new Array();
        var animal1 = new Animal(4);
        listaAnimales.push(animal1);
        var animal2 = new Perro(3);
        listaAnimales.push(animal2);
        var animal3 = new Gato(2, 9);
        listaAnimales.push(animal3);
        for (var _i = 0, listaAnimales_1 = listaAnimales; _i < listaAnimales_1.length; _i++) {
            var animal = listaAnimales_1[_i];
            console.log(animal.quienSoy(), animal.cantidadPatas);
        }
    };
    Main.prototype.saludar = function () {
        alert("hola mundo");
        this.contar();
    };
    Main.prototype.contar = function () {
        console.log(1 + 2);
    };
    return Main;
}());
window.addEventListener("load", function () {
    var main = new Main("matias");
    var btn = document.getElementById("btn");
    btn.addEventListener("click", main.handleEvent);
    //let main:Main = new Main();
    //main.saludar();
});
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Perro.prototype.quienSoy = function () {
        console.log("soy un perro");
    };
    return Perro;
}(Animal));
