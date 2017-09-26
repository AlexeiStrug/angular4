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
var http_service_1 = require("./http.service");
var AppComponent = (function () {
    function AppComponent(httpService) {
        this.httpService = httpService;
        this.users = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getData().subscribe(function (resp) {
            var userList = resp.json().data;
            for (var index in userList) {
                console.log(userList[index]);
                var user = userList[index];
                _this.users.push({ name: user.userName, age: user.userAge });
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styles: ["\n        input.ng-touched.ng-invalid {\n            border: solid red 2px;\n        }\n\n        input.ng-touched.ng-valid {\n            border: solid green 2px;\n        }\n    "],
        template: "\n        <ul>\n            <li *ngFor=\"let user of users\">\n                <p>Name user: {{user?.name}}</p>\n                <p>Age user: {{user?.age}}</p>\n            </li>\n        </ul>",
        providers: [http_service_1.HttpService]
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map