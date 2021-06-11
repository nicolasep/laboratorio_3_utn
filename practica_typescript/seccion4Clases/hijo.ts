
import {Padre} from "./herencia";

class Hijo extends Padre
{
    apellido:string;


    constructor(nombre:string,edad:number,apellido:string)
    {
        super(nombre,edad);

        this.apellido = apellido;
    }

    mostrarNombreHijo():void
    {
        console.log(this.apellido);
    }
}

const nuevoHijo = new Hijo("nicolas",22,"gomez");

nuevoHijo.mostrarNombre();
nuevoHijo.mostrarNombreHijo();