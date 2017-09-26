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
    }
    AppComponent.prototype.onSubmit = function (form) {
        console.log(form);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styles: ["\n        input.ng-touched.ng-invalid {\n            border: solid red 2px;\n        }\n\n        input.ng-touched.ng-valid {\n            border: solid green 2px;\n        }\n    "],
        template: "\n        <form #myForm=\"ngForm\" novalidate (ngSubmit)=\"onSubmit(myForm)\">\n            <div class=\"form-group\">\n                <label>\u0418\u043C\u044F</label>\n                <input class=\"form-control\" name=\"name\" ngModel required/>\n            </div>\n            <div class=\"form-group\">\n                <label>Email</label>\n                <input class=\"form-control\" type=\"email\" name=\"email\" ngModel required email/>\n            </div>\n            <div class=\"form-group\">\n                <label>\u0422\u0435\u043B\u0435\u0444\u043E\u043D</label>\n                <input class=\"form-control\" name=\"phone\" ngModel required pattern=\"[0-9]{10}\"/>\n            </div>\n            <div class=\"form-group\">\n                <input type=\"submit\" [disabled]=\"myForm.invalid\" class=\"btn btn-default\" value=\"Send\"/>\n            </div>\n        </form>\n        <div> Name: {{myForm.value.name}}</div>\n        <div> Email: {{myForm.value.email}}</div>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map