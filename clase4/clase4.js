/*
var express =require("express");
var cors = require("cors");
var corsOptions = {origin:"*",optionSucessStatus:200};
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors(corsOptions));
*/


//var personas=require('./MOCK_DATA.json');


window.addEventListener("load",function()
{
    ejecutarGet();
    var btn = $("btn");
    btn.addEventListener("click",agregarPersona);

    
});
var index = 0;
//
var elementoAModificar;
var modifico = 0;
var valores= Array();


const peticionHttp = new XMLHttpRequest();
    

function ejecutarGet()
{
    
    peticionHttp.onreadystatechange = function()
    {
        console.log("Llego la respuesta",peticionHttp.readyState,peticionHttp.status);
        if(peticionHttp.readyState == 4 && peticionHttp.status == 200)
        {
            
            
            //console.log(peticionHttp.responseText);

            var listaPersonas = JSON.parse(peticionHttp.responseText);//convierte la respuesta en json
            //console.log(listaPersonas[0]);
            for(var i=0;i<listaPersonas.length;i++)
            {
            
                var cuerpo = $("tCuerpo");
                var row = document.createElement("tr");
                cuerpo.appendChild(row);
                
                var tdNombre = document.createElement("td");
                row.appendChild(tdNombre);
                var textoNombre = document.createTextNode(listaPersonas[i].nombre);
                tdNombre.appendChild(textoNombre);
                
                tdNombre.addEventListener("click",SeleccionarFila);
                
                var tdApellido = document.createElement("td");
                row.appendChild(tdApellido);
                var textoApellido = document.createTextNode(listaPersonas[i].apellido);
                tdApellido.appendChild(textoApellido);

                var tdAccion = document.createElement("td");
                row.appendChild(tdAccion);
                var ancla = document.createElement("a");
                tdAccion.appendChild(ancla);
                ancla.setAttribute("href","#");

                var textoAncla = document.createTextNode("borrar");
                ancla.appendChild(textoAncla);
            }
        
        }
        
        
        
        //peticionHttp.setRequestHeader("key","value");//cuando se setea algo en el heat
    
    }
    //peticionHttp.open("GET","https://607eee2c02a23c0017e8c685.mockapi.io/users",true);
        peticionHttp.open("GET","http://localHost:3000/personas",true);
        //peticionHttp.setRequestHeader("archivo","usuarios");
        peticionHttp.send();//adentro de los () se coloca lo que se va a enviar

}
function agregarPersona()
{
    var txtNom = $("txtNombre");
    var txtApe  = $("txtApellido");
    if(txtNom.value=="")
    {
        txtNom.className="conError";
        return;
    }
    else{
        txtNom.className="sinError";
    }
    if(txtApe.value=="")
    {
        txtApe.className="conError";
        return;
    }
    else{
        txtApe.className="sinError";
    }

    var cuerpo = $("tCuerpo");
    /*
    cuerpo.innerHTML= cuerpo.innerHTML+"<tr>"+
    "<td>"+txtNom.value+ "</td>"+
    "<td>"+txtApe.value+ "</td>"+
    "<td><a href='#'>borrar</a></td>"+
    "</tr>";*/

    if(modifico == 0)
    {

    
        var row = document.createElement("tr");
        cuerpo.appendChild(row);
        
        var tdNombre = document.createElement("td");
        row.appendChild(tdNombre);
        var textoNombre = document.createTextNode(txtNom.value);
        tdNombre.appendChild(textoNombre);
        
        tdNombre.addEventListener("click",SeleccionarFila);
        
        var tdApellido = document.createElement("td");
        row.appendChild(tdApellido);
        var textoApellido = document.createTextNode(txtApe.value);
        tdApellido.appendChild(textoApellido);

        var tdAccion = document.createElement("td");
        row.appendChild(tdAccion);
        var ancla = document.createElement("a");
        tdAccion.appendChild(ancla);
        ancla.setAttribute("href","#");

        var textoAncla = document.createTextNode("borrar");
        ancla.appendChild(textoAncla);
        
        
        ancla.addEventListener("click",borrarFila);
        
        index++;
    
    }
    else
    {
        ModificarLinea(elementoAModificar,txtNom.value,txtApe.value);

    }
    limpiarText();
    //var prueba;
    //prueba.addEventListener("click",SeleccionarFila);
    
}
function limpiarText()
{
    $("txtNombre").value="";
    $("txtApellido").value="";
}

function $(id)
{
    return document.getElementById(id);
}
function borrarFila(event)
{
    alert("Se va a borrar una fila");
    var elemento = event.target;

    $("tCuerpo").removeChild(elemento.parentNode.parentNode);
}
function SeleccionarFila(event)
{
   
    var elementosTD=event.srcElement.parentElement.getElementsByTagName("td");
    elementoAModificar = elementosTD;

    for(let i=0;i<elementosTD.length-1;i++)

    {

        valores[i]=elementosTD[i].innerHTML;

    }

    $("txtNombre").value = valores[0];
    $("txtApellido").value = valores[1];
    modifico = 1;
    //id =elementosTD.id;
    

    
}
function ModificarLinea(elementotd,dato1, dato2)
{
    //alert(elementotd[0].innerHTML);
    elementotd[0].innerHTML=dato1;
    elementotd[1].innerHTML=dato2;
    modifico = 0;
}

/* //a lo picapiedra
        function Eliminar(event){
            var vinculo = event.target;
            var celda = vinculo.parentNode;
            var fila = celda.parentNode;
            var tabla = fila.parentNode;
            tabla.removeChild(fila);



            cuando se haga click en una fila se complete con los datos nombre y apellido
            si se modifica desde nombre y apellido se modifique la celda
        }*/



        //console.log(peticionHttp.responseText);
            /*
            var listaPersonas = JSON.parse(peticionHttp.responseText);//convierte la respuesta en json
            //console.log(listaPersonas[0]);
            for(var i=0;i<listaPersonas.length;i++)
            {
            
                var cuerpo = $("tCuerpo");
                var row = document.createElement("tr");
                cuerpo.appendChild(row);
                
                var tdNombre = document.createElement("td");
                row.appendChild(tdNombre);
                var textoNombre = document.createTextNode(listaPersonas[i].name);
                tdNombre.appendChild(textoNombre);
                
                tdNombre.addEventListener("click",SeleccionarFila);
                
                var tdApellido = document.createElement("td");
                row.appendChild(tdApellido);
                var textoApellido = document.createTextNode(listaPersonas[i].apellido);
                tdApellido.appendChild(textoApellido);

                var tdAccion = document.createElement("td");
                row.appendChild(tdAccion);
                var ancla = document.createElement("a");
                tdAccion.appendChild(ancla);
                ancla.setAttribute("href","#");

                var textoAncla = document.createTextNode("borrar");
                ancla.appendChild(textoAncla);
            }
            //peticionHttp.send();//adentro de los () se coloca lo que se va a enviar
        */