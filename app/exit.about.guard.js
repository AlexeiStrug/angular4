"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExitAboutGuard = (function () {
    function ExitAboutGuard() {
    }
    ExitAboutGuard.prototype.canDeactivate = function (component) {
        return component.cadDeactivate() ? component.cadDeactivate() : true;
    };
    return ExitAboutGuard;
}());
exports.ExitAboutGuard = ExitAboutGuard;
//# sourceMappingURL=exit.about.guard.js.map