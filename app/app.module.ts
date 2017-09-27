import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
// import {WhileDirective} from './while.directive';
// import {DataComponent} from "./data.component";
// import {DataService} from "./data.service";
import {LogService} from "./log.service";
import {HttpModule} from "@angular/http";
import {AboutComponent} from "./about.component";
import {NotFoundComponent} from "./not-found.component";
import {HomeComponent} from "./home.component";
import {Routes, RouterModule} from "@angular/router";

import {ItemComponent} from "./item.component";
import {ItemDetailsComponent} from "./item.details.component";
import {ItemStatComponent} from "./item.stat.component";
import {AboutGuard} from "./about.guard";
import {ExitAboutGuard} from "./exit.about.guard";
import {FactorialPipe} from "./factorial.pipe";
import {JoinPipe} from "./join.pipe";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent, canActivate: [AboutGuard], canDeactivate: [ExitAboutGuard]},
    {path: 'item/:id', component: ItemComponent},
    {path: 'contact', redirectTo: '/about', pathMatch: 'full'},
    {path: '**', redirectTo: '/'}
];

// const itemRoutes: Routes = [
//     {path: 'details', component: ItemDetailsComponent},
//     {path: 'stat', component: ItemStatComponent},
// ];
//
// const appRoutes: Routes = [
//     {path: 'item/:id', component: ItemComponent},
//     {path: 'item/:id', component: ItemComponent, children: itemRoutes},
//     {path: '', component: HomeComponent}
// ]

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [JoinPipe, FactorialPipe, AppComponent, HomeComponent, AboutComponent, NotFoundComponent, ItemComponent
        , ItemDetailsComponent, ItemStatComponent],
    providers: [AboutGuard, ExitAboutGuard],
    bootstrap: [AppComponent]
    // providers: [DataService, LogService]
})
export class AppModule {
}