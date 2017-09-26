import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
// import {WhileDirective} from './while.directive';
// import {DataComponent} from "./data.component";
// import {DataService} from "./data.service";
import {LogService} from "./log.service";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    // providers: [DataService, LogService]
})
export class AppModule {
}