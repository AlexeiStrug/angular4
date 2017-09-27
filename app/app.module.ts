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

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'item/:id', component: ItemComponent},
    {path: 'contact', redirectTo: '/about', pathMatch: 'full'},
    {path: '**', redirectTo: '/'}
];

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, HomeComponent, AboutComponent, NotFoundComponent, ItemComponent],
    bootstrap: [AppComponent]
    // providers: [DataService, LogService]
})
export class AppModule {
}