
const cartaDePostres = (postres:string, ...frutas:string[]):void=>{

    console.log(`El postre es ${postres} y tiene: ${frutas}`);
}
cartaDePostres("postre 1", "naranja "," banana"," manzana");
