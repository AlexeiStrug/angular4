"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Phone = (function () {
    function Phone(title, price, company) {
        this.title = title;
        this.price = price;
        this.company = company;
    }
    return Phone;
}());
exports.Phone = Phone;
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var AppComponent = (function () {
    function AppComponent() {
        this.user = new User();
    }
    AppComponent.prototype.addUser = function () {
        console.log(this.user);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styles: ["\n        input.ng-touched.ng-invalid {\n            border: solid red 2px;\n        }\n\n        input.ng-touched.ng-valid {\n            border: solid green 2px;\n        }\n    "],
        template: "\n        <div>\n            <div class=\"form-group\">\n                <label>\u0418\u043C\u044F</label>\n                <input class=\"form-control\" name=\"name\" [(ngModel)]=\"user.name\" #name=\"ngModel\" required/>\n            </div>\n            <div class=\"form-group\">\n                <label>Email</label>\n                <input class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"user.email\" #email=\"ngModel\"\n                       required email/>\n            </div>\n            <div class=\"form-group\">\n                <label>\u0422\u0435\u043B\u0435\u0444\u043E\u043D</label>\n                <input class=\"form-control\" name=\"phone\" [(ngModel)]=\"user.phone\" #phone=\"ngModel\"\n                       required pattern=\"[0-9]{10}\"/>\n            </div>\n            <div class=\"form-group\">\n                <button [disabled]=\"name.invalid || email.invalid || phone.invalid\"\n                        class=\"btn btn-default\" (click)=\"addUser()\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C\n                </button>\n            </div>\n        </div>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map