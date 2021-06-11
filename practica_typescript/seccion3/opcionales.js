var opcionales = function (nombre, apellido, edad) {
    if (edad) {
        console.log("se llama " + nombre + " su apellido es " + apellido + " y su edad es " + edad);
    }
    else {
        console.log("se llama " + nombre + " su apellido es " + apellido); // con las ` se usa un template
    }
};
opcionales("nicolas", "perex", 35);
opcionales("nicolas", "gomez");
