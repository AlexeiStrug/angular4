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
var data_service_1 = require("./data.service");
var AppComponent = (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.items = [];
    }
    AppComponent.prototype.addItem = function (name, price) {
        this.dataService.addData(name, price);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.items = this.dataService.getData();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n        <div class=\"panel\">\n            <div class=\"form-inline\">\n                <div class=\"form-group\">\n                    <div class=\"col-md-8\">\n                        <input class=\"form-control\" [(ngModel)]=\"name\" placeholder=\"Model Phone\"/>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"col-md-6\">\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"price\" placeholder=\"Price phone\"/>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"col-md-offset 2 col-md-8\">\n                        <button class=\"btn btn-default\" (click)=\"addItem(name,price)\">Add</button>\n                    </div>\n                </div>\n            </div>\n            <table class=\"table tale-striped\">\n                <thead>\n                <tr>\n                    <th>Model</th>\n                    <th>Price</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let item of items\">\n                    <td>{{item.name}}</td>\n                    <td>{{item.price}}</td>\n                </tr>\n                </tbody>\n            </table>\n        </div> ",
        providers: [data_service_1.DataService]
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map