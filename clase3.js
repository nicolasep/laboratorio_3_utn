
window.addEventListener("load",cargar);

var mensaje = "Texto";
//alert(mensaje);
var mensaje1 = 11;
var mensaje2 = 1.1;
var mensaje3 = false;
var mensaje4 = 12;
var funcion = sumar; // sin poner los parentesis se guarda el puntero a la funcion

        

function cargar2()
{
    var btn = document.getElementById("btn");
    btn.addEventListener("click",saludar);

    var input = document.getElementById("name");
    input.addEventListener("click",function(){
        alert("funcion anonima");
    });

    /*
    var inputNombre = document.getElementById("name");
    inputNombre.value= "ingrese nombre";
    console.log(inputNombre);*/
}
/*
function hacerAlgo(mostrar)
{
    mostrar("hice algo");
}
hacerAlgo(saludar);
*/
function saludar()
{
    var input = document.getElementById("name");
    var textoAdentro = input.value;

    alert(textoAdentro);
}

//mensaje = "Texto";

//alert(mensaje*2);

/*
function sumar(num1,num2)
{
    if(num2==undefined)
    {
        alert(num1);
    }
    else
    {
        alert(num1+num2);
    }
    
}*/

//sumar("hola","chau");