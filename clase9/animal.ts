class Animal
{
    private cantidadPatas:number;

    constructor(cantidadPatas:number)
    {
        this.cantidadPatas = cantidadPatas;
    }

    public quienSoy()
    {
        console.log("soy un animal");
    }
    public get getPatas():number
    {
        return this.cantidadPatas;
    }
    public set setPatas(patas:number)
    {
        this.cantidadPatas = patas;
    }
}