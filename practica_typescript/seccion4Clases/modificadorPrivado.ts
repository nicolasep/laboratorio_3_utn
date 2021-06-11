class Animal2
{
    private nombre:string;
    private tamanio:number;

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

const obj2 = new Animal2("serpiente",2);
