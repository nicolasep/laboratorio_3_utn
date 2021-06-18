"use strict";
var Consultas = /** @class */ (function () {
    function Consultas() {
    }
    Consultas.prototype.ejecutarGet = function (url, listerCallback) {
        var xlm = new XMLHttpRequest();
        xlm.onreadystatechange = function () {
            if (xlm.readyState === 4) {
                listerCallback.response(xlm.status, xlm.responseText);
            }
        };
        xlm.open("GET", url, true);
        xlm.send();
    };
    return Consultas;
}());
