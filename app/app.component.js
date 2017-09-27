"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Item = (function () {
    function Item() {
    }
    return Item;
}());
exports.Item = Item;
var AppComponent = (function () {
    function AppComponent() {
        this.phones = ["iPhone 7", "LG G 5", "Honor 9", "Idol S4", "Nexus 6P"];
        this.x = 5;
        this.myDate = new Date(1913, 3, 12);
        this.welcome = "Hello World!";
        this.persentage = 0.14;
        this.pi = 3.1415;
        this.money = 23.45;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n        <input [(ngModel)]=\"fact\" name=\"fact\"/>\n        <div>Factorial number {{fact}} = {{fact | factorial}}</div>\n        <input #phone name=\"phone\" class=\"form-control\">\n        <button class=\"btn\" (click)=\"phones.push(phone.value)\">Add</button>\n        <p>{{phones | join}}</p>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map