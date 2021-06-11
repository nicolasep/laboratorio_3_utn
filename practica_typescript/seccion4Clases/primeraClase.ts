
class vehiculo
{
    marca:string;
    fecha:string;
    puertas:number;

    public constructor(marca_:string, fecha_:string, puertas_:number)
    {
        this.marca =marca_;
        this.fecha = fecha_;
        this.puertas = puertas_;
    }
    acelerar():void
    {
        console.log("acelero");
    }
    frenar():void
    {
        console.log("freno");
    }
}

const coche = new vehiculo("Ford","12/7/2018",4);

console.log(coche.marca);
console.log(coche.fecha);
coche.acelerar();
