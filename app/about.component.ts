import {Component} from "@angular/core";
import {ComponentCanDeactivate} from "./exit.about.guard";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'about-app',
    template: `<h3>About site</h3>
    <button class="btn btn-default" (click)="save()">Save</button>
    <a routerLink="">Home</a> `
})

export class AboutComponent implements ComponentCanDeactivate {

    saved: boolean = false;

    save() {
        this.saved = true;
    }


    cadDeactivate(): boolean | Observable<boolean> {
        if (!this.saved) {
            return confirm("You shure what left page?")
        }
        else {
            return true;
        }
    }
}