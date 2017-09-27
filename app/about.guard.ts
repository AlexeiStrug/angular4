
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";

export class AboutGuard implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> |
        boolean {
        return confirm('You shure?');
    }
}