var cartaDePostres = function (postres) {
    var frutas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        frutas[_i - 1] = arguments[_i];
    }
    console.log("El postre es " + postres + " y tiene: " + frutas);
};
cartaDePostres("postre 1", "naranja ", " banana", " manzana");
