"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
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
        this.myForm = new forms_1.FormGroup({
            "userName": new forms_1.FormControl("Tom", forms_1.Validators.required),
            "userEmail": new forms_1.FormControl("", [forms_1.Validators.required,
                forms_1.Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")]),
            "userPhone": new forms_1.FormControl()
        });
    }
    AppComponent.prototype.submit = function () {
        console.log(this.myForm);
    };
    AppComponent.prototype.onSubmit = function (form) {
        console.log(form);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styles: ["\n        input.ng-touched.ng-invalid {\n            border: solid red 2px;\n        }\n\n        input.ng-touched.ng-valid {\n            border: solid green 2px;\n        }\n    "],
        template: "\n        <form [formGroup]=\"myForm\" novalidate (ngSubmit)=\"submit()\">\n            <div class=\"form-group\">\n                <label>\u0418\u043C\u044F</label>\n                <input class=\"form-control\" name=\"name\" formControlName=\"userName\"/>\n            </div>\n            <div class=\"alert alert-danger\"\n                 *ngIf=\"myForm.controls['userName'].invalid && myForm.controls['userName'].touched\">\n                No name\n            </div>\n            <div class=\"form-group\">\n                <label>Email</label>\n                <input class=\"form-control\" type=\"email\" name=\"email\" formControlName=\"userEmail\"/>\n            </div>\n            <div class=\"alert alert-danger\"\n                 *ngIf=\"myForm.controls['userEmail'].invalid && myForm.controls['userEmail'].touched\">\n                Incorrect email\n            </div>\n            <div class=\"form-group\">\n                <label>\u0422\u0435\u043B\u0435\u0444\u043E\u043D</label>\n                <input class=\"form-control\" name=\"phone\" formControlName=\"userPhone\"/>\n            </div>\n            <div class=\"form-group\">\n                <button class=\"btn btn-default\" [disabled]=\"myForm.invalid\">Send</button>\n            </div>\n        </form>"
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map