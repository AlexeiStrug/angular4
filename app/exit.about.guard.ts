import {Observable} from "rxjs/Observable";
import {CanDeactivate} from "@angular/router";

export interface ComponentCanDeactivate{
    cadDeactivate: () => boolean | Observable<boolean>;
}

export class ExitAboutGuard implements CanDeactivate<ComponentCanDeactivate>{
    canDeactivate(component: ComponentCanDeactivate) : Observable<boolean> | boolean {
        return component.cadDeactivate() ? component.cadDeactivate() : true;
    }
}