class Padre
{
    nombre:string;
    edad:number;

    constructor(nombre:string,edad:number)
    {
        this.nombre = nombre;
        this.edad = edad;

    }
    mostrarNombre()
    {
        console.log(this.nombre);
    }
}

export{Padre}