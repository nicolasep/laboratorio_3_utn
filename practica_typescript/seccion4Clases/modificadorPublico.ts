class Animal
{
    public nombre:string;
    public tamanio:number;

    public constructor(nombre:string,tamanio:number)
    {
        this.nombre = nombre;
        this.tamanio = tamanio;
    }

    public moverse():void
    {
        console.log("me estoy moviendo");
    }
    

    
}

const obj = new Animal("serpiente",2);
