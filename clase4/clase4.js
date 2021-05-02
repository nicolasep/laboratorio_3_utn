window.addEventListener("load",function()
{
    var btn = $("btn");
    btn.addEventListener("click",agregarPersona);

    
});
//
var modifico = 0;
var valores= Array();

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
    

    for(let i=0;i<elementosTD.length-1;i++)

    {

        valores[i]=elementosTD[i].innerHTML;

    }

    $("txtNombre").value = valores[0];
    $("txtApellido").value = valores[1];
    modifico = 1;
    id =elementosTD.id;
    

    
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