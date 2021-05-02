window.addEventListener("load",cargar);

function cargar()
{

    var input = document.getElementById("btn");
    input.addEventListener("click",sumar);

    
}

function sumar()
{
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var resultado = document.getElementById("resultado");
    var parrafo = document.getElementById("parrafo");
    
    var suma =parseInt(num1.value)+parseInt(num2.value);
    //alert(suma);
    resultado.value = suma;
    parrafo.innerHTML=suma;
    var btn = document.getElementById("btn");
    //btn.name
}

