"use strict";
/*hacer el parcial en typescript*/
var Main = /** @class */ (function () {
    function Main(nombre) {
        this.nombre = nombre;
        this.animal = new Animal(0);
        this.consultasAjax = new Consultas();
    }
    Main.prototype.handleEvent = function (ev) {
        this.consultasAjax.ejecutarGet("http://localhost", this);
        //alert(`hola mundo soy ${this.nombre}`);
        // this.contar();
        /*
        let listaAnimales:Array<Animal> = new Array();
        let animal1: Animal = new Animal(4);
        listaAnimales.push(animal1);
        let animal2:Perro = new Perro(3);
        listaAnimales.push(animal2);
        let animal3:Gato = new Gato(2,9);
        listaAnimales.push(animal3);

        for(let animal of listaAnimales)
        {
            console.log(animal.quienSoy(),animal.cantidadPatas);
        }*/
        var boton = ev.target;
        if (boton.id == "Cargar Animal") {
            console.log(boton.textContent);
            var num = document.getElementById("ipNum");
            var numerica = Number(num.value);
            //this.animal.setPatas(numerica);
        }
        else {
            this.mostrar();
        }
        this.mostrar();
    };
    Main.prototype.response = function (status, respose) {
        if (status == 200) {
            var datos = JSON.parse(respose);
        }
    };
    Main.prototype.mostrar = function () {
        alert("El animal cargado tiene " + this.animal.getPatas);
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
    //let main:Main = new Main("matias");
    var btn = document.getElementById("btn");
    btn.addEventListener("click", main.handleEvent);
    var btnMostrar = document.getElementById("btnMostrar");
    btnMostrar.addEventListener("click", main.handleEvent);
    //let main:Main = new Main();
    //main.saludar();
});
