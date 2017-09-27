import {Component, OnInit} from '@angular/core';
// import {DataService} from "./data.service";
import {LogService} from "./log.service";
import {NgForm, NgModel} from "@angular/forms";
import {FormGroup, FormControl, Validators} from "@angular/forms";
// import {HttpService} from "./http.service";
// import {User} from "./user";
//
// export class Item {
//     purchase: string;
//     done: boolean;
//     price: number;
//
//     constructor(purchase: string, price: number) {
//
//         this.purchase = purchase;
//         this.price = price;
//         this.done = false;
//     }
// }
// export class Phone {
//     constructor(public title: string, public price: number,
//                 public company: string) {
//     }
// }
//
// export class User {
//     name: string;
//     email: string;
//     phone: string;
// }

@Component({
    selector: 'my-app',
    // templateUrl: './app.component.html',
    // styleUrls: ['./app.component.css']

    // operator If else
    // template: `
    //     <div *ngIf="condition; then thenBlock else elseBlock"></div>
    //     <ng-template #thenBlock><p>Then block</p></ng-template>
    //     <ng-template #elseBlock><p>Else block</p></ng-template>
    // <button (click)="toggle()">Toggle</button> `

    //operator for
    // template: `
    //     <ul>
    //         <li *ngFor="let item of items; let i = index">{{i+1}}.{{item}}</li>
    //     </ul>`

    //operator switch case
    // template: `
    //     <div [ngSwitch]="count">
    //         <template [ngSwitchCase]="1">{{count * 10}}</template>
    //         <template [ngSwitchCase]="2">{{count * 100}}</template>
    //         <template ngSwitchDefault>{{count * 1000}}</template>
    //     </div>`

    // uses for while directive
    // template:
    //         `<p *while="condition">
    //     Первый параграф
    // </p>
    // <p *while="!condition">
    //     Второй параграф
    // </p>
    // <button (click)="toggle()"> Toggle</button> `

    //DI with logging
    // template: `
    //     <div class="panel">
    //         <div class="form-inline">
    //             <div class="form-group">
    //                 <div class="col-md-8">
    //                     <input class="form-control" [(ngModel)]="name" placeholder="Model Phone"/>
    //                 </div>
    //             </div>
    //             <div class="form-group">
    //                 <div class="col-md-6">
    //                     <input type="number" class="form-control" [(ngModel)]="price" placeholder="Price phone"/>
    //                 </div>
    //             </div>
    //             <div class="form-group">
    //                 <div class="col-md-offset 2 col-md-8">
    //                     <button class="btn btn-default" (click)="addItem(name,price)">Add</button>
    //                 </div>
    //             </div>
    //         </div>
    //         <table class="table tale-striped">
    //             <thead>
    //             <tr>
    //                 <th>Model</th>
    //                 <th>Price</th>
    //             </tr>
    //             </thead>
    //             <tbody>
    //             <tr *ngFor="let item of items">
    //                 <td>{{item.name}}</td>
    //                 <td>{{item.price}}</td>
    //             </tr>
    //             </tbody>
    //         </table>
    //     </div> `,
    // providers: [DataService, LogService]

    //operation with one for all
    // template: `
    //     <data-comp></data-comp>
    //     <data-comp></data-comp>`

    // template: `
    //     <div class="col-xs-8">
    //         <div class="form-group">
    //             <label>Название модели</label>
    //             <input class="form-control" name="title" [(ngModel)]="phone.title" #phoneTitle="ngModel"
    //                    (ngModelChange)="onTitleChange()"/>
    //         </div>
    //         <div class="form-group">
    //             <label>Цена</label>
    //             <input type="number" class="form-control" name="price" [(ngModel)]="phone.price" #phonePrice="ngModel"/>
    //         </div>
    //         <div class="form-group">
    //             <label>Производитель</label>
    //             <select class="form-control" name="company" [(ngModel)]="phone.company" #phoneCompany="ngModel">
    //                 <option *ngFor="let comp of companies" [value]="comp">
    //                     {{comp}}
    //                 </option>
    //             </select>
    //         </div>
    //         <div class="form-group">
    //             <button class="btn btn-default" (click)="addPhone(phoneTitle, phonePrice, phoneCompany)">Добавить
    //             </button>
    //         </div>
    //         <div><
    //             <p>{{phoneTitle.name}} : {{phoneTitle.model}}</p>
    //             <p>{{phonePrice.name}} : {{phonePrice.model}}</p>
    //             <p>{{phoneCompany.name}} : {{phoneCompany.model}}</p>
    //         </div>
    //     </div>
    // `


    styles: [`
        input.ng-touched.ng-invalid {
            border: solid red 2px;
        }

        input.ng-touched.ng-valid {
            border: solid green 2px;
        }
    `],

    //ngForm
    // template: `
    //     <form #myForm="ngForm" novalidate (ngSubmit)="onSubmit(myForm)">
    //         <div class="form-group">
    //             <label>Имя</label>
    //             <input class="form-control" name="name" ngModel required/>
    //         </div>
    //         <div class="form-group">
    //             <label>Email</label>
    //             <input class="form-control" type="email" name="email" ngModel required email/>
    //         </div>
    //         <div class="form-group">
    //             <label>Телефон</label>
    //             <input class="form-control" name="phone" ngModel required pattern="[0-9]{10}"/>
    //         </div>
    //         <div class="form-group">
    //             <input type="submit" [disabled]="myForm.invalid" class="btn btn-default" value="Send"/>
    //         </div>
    //     </form>
    //     <div> Name: {{myForm.value.name}}</div>
    //     <div> Email: {{myForm.value.email}}</div>`

    //Data-Driven
    // template: `
    //     <form [formGroup]="myForm" novalidate (ngSubmit)="submit()">
    //         <div class="form-group">
    //             <label>Имя</label>
    //             <input class="form-control" name="name" formControlName="userName"/>
    //         </div>
    //         <div class="alert alert-danger"
    //              *ngIf="myForm.controls['userName'].invalid && myForm.controls['userName'].touched">
    //             No name
    //         </div>
    //         <div class="form-group">
    //             <label>Email</label>
    //             <input class="form-control" type="email" name="email" formControlName="userEmail"/>
    //         </div>
    //         <div class="alert alert-danger"
    //              *ngIf="myForm.controls['userEmail'].invalid && myForm.controls['userEmail'].touched">
    //             Incorrect email
    //         </div>
    //         <div class="form-group">
    //             <label>Телефон</label>
    //             <input class="form-control" name="phone" formControlName="userPhone"/>
    //         </div>
    //         <div class="form-group">
    //             <button class="btn btn-default" [disabled]="myForm.invalid">Send</button>
    //         </div>
    //     </form>`

    //HTTPS get request sigle user
    // template: `<div>
    //     <p>Name user: {{user?.name}}</p>
    //     <p>Age user: {{user?.age}}</p>
    // </div>`,
    // providers: [HttpService]

    //HTTPS get request many users
    // template: `
    //     <ul>
    //         <li *ngFor="let user of users">
    //             <p>Name user: {{user?.name}}</p>
    //             <p>Age user: {{user?.age}}</p>
    //         </li>
    //     </ul>`,
    // providers: [HttpService]

    template: `<div>
        <h1>Route in Angular</h1>
        <router-outlet></router-outlet>
    </div>`
})

export class AppComponent{

    //other json with dop field
    // users: User[] = [];
    // error: any;
    //
    // constructor(private httpService: HttpService) {
    // }

    // ngOnInit() {
    //     this.httpService.getData().subscribe((resp: Response) => {
    //         let userList = resp.json().data;
    //         for (let index in userList) {
    //             console.log(userList[index];
    //             let user = userList[index];
    //             this.users.push({name: user.userName, age: user.userAge});
    //         }
    //     })

    // ngOnInit() {
    //     this.httpService.getUsers().subscribe(data => this.users = data,
    //         error => {this.error = error; console.log(error)}
    //         );
    // }

    //Http many user
    // users: User[]=[];
    //
    // //Http one user
    // // user: User;
    // //
    // constructor(private httpService: HttpService){}
    //
    // ngOnInit(){
    //     this.httpService.getData().subscribe((data: Response) => this.users=data.json());
    // }
    // Need for Data-Driven
    // myForm: FormGroup;
    //
    // constructor() {
    //     this.myForm = new FormGroup({
    //         "userName": new FormControl("Tom", Validators.required),
    //         "userEmail": new FormControl("", [Validators.required,
    //             Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")]),
    //         "userPhone": new FormControl()
    //     });
    // }
    //
    // submit() {
    //     console.log(this.myForm);
    // }
    //
    // onSubmit(form: NgForm) {
    //     console.log(form);
    // }

    // user: User = new User();
    //
    // addUser() {
    //     console.log(this.user);
    // }

    // phone: Phone = new Phone("", 0, "Samsung")
    // companies: string[] = ["Apple", "Samsung"];
    //
    // addPhone(title: NgModel, price: NgModel, company: NgModel) {
    //     console.log(title);
    //     console.log(price);
    //     console.log(company);
    // }
    //
    // onTitleChange() {
    //
    //     if (this.phone.title == "нет")
    //         this.phone.title = "не известно";
    // }

    // items: Phone[] = [];
    //
    // constructor(private dataService: DataService) {
    // }
    //
    // addItem(name: string, price: number) {
    //     this.dataService.addData(name, price);
    // }
    //
    // ngOnInit() {
    //     this.items = this.dataService.getData();
    // }


    // operator if else and structure data
    // condition: boolean = true;
    //
    // toggle() {
    //     this.condition = !this.condition;
    // }

    //operator for
    // items = ["Apple", "Huawei", "Samsung"];

    //operator switch..case
    // count: number = 2;

    // items: Item[] =
    //     [
    //         {purchase: "Хлеб", done: false, price: 15.9},
    //         {purchase: "Масло", done: false, price: 60},
    //         {purchase: "Картофель", done: true, price: 22.6},
    //         {purchase: "Сыр", done: false, price: 310}
    //     ];
    //
    // addItem(text: string, price: number): void {
    //
    //     if (text == null || text == undefined || text.trim() == "")
    //         return;
    //     if (price == null || price == undefined)
    //         return;
    //     this.items.push(new Item(text, price));
    // }
}