import {Component} from '@angular/core';
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

    template:
            `<p *while="condition">
        Первый параграф
    </p>
    <p *while="!condition">
        Второй параграф
    </p>
    <button (click)="toggle()"> Toggle</button> `
})

export class AppComponent {

    // operator if else and structure data
    condition: boolean = true;

    toggle() {
        this.condition = !this.condition;
    }

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