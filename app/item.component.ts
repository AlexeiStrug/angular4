import {Component, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'item-info',
    template: `<h3>Model {{id}}</h3>`
})
export class ItemComponent implements OnDestroy {
    private id: number;
    private subscription: Subscription;

    constructor(private activeteRoute: ActivatedRoute) {

        this.subscription = activeteRoute.params.subscribe(params => this.id = params['id']);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}