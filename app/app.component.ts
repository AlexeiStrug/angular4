import {Component, OnInit} from '@angular/core';
import {DataService} from "./data.service";
import {Phone} from "./phone";
import {LogService} from "./log.service";
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

    template: `
        <div class="panel">
            <div class="form-inline">
                <div class="form-group">
                    <div class="col-md-8">
                        <input class="form-control" [(ngModel)]="name" placeholder="Model Phone"/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-6">
                        <input type="number" class="form-control" [(ngModel)]="price" placeholder="Price phone"/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-offset 2 col-md-8">
                        <button class="btn btn-default" (click)="addItem(name,price)">Add</button>
                    </div>
                </div>
            </div>
            <table class="table tale-striped">
                <thead>
                <tr>
                    <th>Model</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.name}}</td>
                    <td>{{item.price}}</td>
                </tr>
                </tbody>
            </table>
        </div> `,
    providers: [DataService, LogService]
})

export class AppComponent implements OnInit {
    items: Phone[] = [];
    constructor(private dataService: DataService) {
    }

    addItem(name: string, price: number) {
        this.dataService.addData(name, price);
    }

    ngOnInit() {
        this.items = this.dataService.getData();
    }


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