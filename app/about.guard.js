"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AboutGuard = (function () {
    function AboutGuard() {
    }
    AboutGuard.prototype.canActivate = function (route, state) {
        return confirm('You shure?');
    };
    return AboutGuard;
}());
exports.AboutGuard = AboutGuard;
//# sourceMappingURL=about.guard.js.map