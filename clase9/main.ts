
/*hacer el parcial en typescript*/
class Main implements EventListenerObject, ResponseGet
{
    nombre:string;

    animal:Animal;

    consultasAjax:Consultas;

    constructor(nombre:string)
    {
        this.nombre = nombre;
        this.animal = new Animal(0);
        this.consultasAjax = new Consultas();
    }
    public handleEvent(ev:Event):void
    {
        this.consultasAjax.ejecutarGet("http://localhost",this);

        //alert(`hola mundo soy ${this.nombre}`);
    
       // this.contar();
        /*
        let listaAnimales:Array<Animal> = new Array();
        let animal1: Animal = new Animal(4);
        listaAnimales.push(animal1);
        let animal2:Perro = new Perro(3);
        listaAnimales.push(animal2);
        let animal3:Gato = new Gato(2,9);
        listaAnimales.push(animal3);

        for(let animal of listaAnimales)
        {
            console.log(animal.quienSoy(),animal.cantidadPatas);
        }*/
        let boton:HTMLElement = <HTMLAnchorElement>ev.target ;
        
        if(boton.id == "Cargar Animal")
        {
            console.log(boton.textContent);

            let num:HTMLInputElement=<HTMLInputElement> document.getElementById("ipNum");
            let numerica:number =Number(num.value);
            //this.animal.setPatas(numerica);
        }
        else
        {
            this.mostrar();
        }
        

        


        this.mostrar();
    }
    public response(status:number,respose:string)
    {
        if(status ==200)
        {
            let datos = JSON.parse(respose);
        }
    }
    public mostrar()
    {
        alert(`El animal cargado tiene ${this.animal.getPatas}`)
    }

    public saludar():void
    {
        alert("hola mundo");
        this.contar();
    }

    public contar()
    {
        console.log(1+2);
    }


}


window.addEventListener("load",()=>{

    let main:Main = new Main("matias");
    //let main:Main = new Main("matias");
    let btn =<HTMLElement> document.getElementById("btn");
    btn.addEventListener("click",main.handleEvent);
    let btnMostrar =<HTMLElement> document.getElementById("btnMostrar");
    btnMostrar.addEventListener("click",main.handleEvent);

    

    //let main:Main = new Main();

    //main.saludar();
})