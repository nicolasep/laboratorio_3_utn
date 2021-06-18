class Gato extends Animal{

    public vidas:number

    constructor(cantidadPatas:number, vidas:number) {
        super(cantidadPatas);
        this.vidas = vidas;
        
    }
    public quienSoy()
    {
        console.log("soy un gato");
    }
}