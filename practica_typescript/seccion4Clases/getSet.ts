
let permiso = true;

class Persona
{
    protected nombre:string;

    constructor(nombre:string)
    {
        this.nombre = nombre;
    }

    get getNombre():string
    {
        return this.nombre;
    }
    set setNombre(nombre:string)
    {
        if(permiso)
        {
            this.nombre = nombre;
        }
        else
        {
            console.log("no tiene permisos");
        }
    }

   
}

const objeto = new Persona("ramirez");
console.log(objeto.getNombre);
