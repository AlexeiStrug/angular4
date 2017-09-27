import {Component, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'item-info',
    //routing by id
    // template: `<h3>Model {{id}}</h3>`

    // template: `<h3>Model {{id}}</h3>
    // <div>Product: {{product}}</div>
    // <div>Price: {{price}}</div>`

    template: `<h2>Item {{id}}</h2>
    <router-outlet></router-outlet>`
})
export class ItemComponent implements OnDestroy {
    private id: number;
    // private product: string;
    // private price: string;

    private subscription: Subscription;
    // private querySubscription: Subscription;

    constructor(private activeteRoute: ActivatedRoute) {

        this.subscription = activeteRoute.params.subscribe(params => this.id = params['id']);
        // this.querySubscription = activeteRoute.queryParams.subscribe(
        //     (queryParam: any) => {
        //         this.product = queryParam['product'];
        //         this.price = queryParam['price'];
        //     }
        // );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        // this.querySubscription.unsubscribe();
    }
}