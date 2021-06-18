"use strict";
var ManejoClick = /** @class */ (function () {
    function ManejoClick(main) {
        this.main = main;
    }
    ManejoClick.prototype.handleEvent = function (ev) {
        this.main.animal.setPatas(2);
    };
    return ManejoClick;
}());
