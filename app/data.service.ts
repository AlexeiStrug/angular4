import {Phone} from './phone';
import {Injectable} from "@angular/core";
import {LogService} from "./log.service";

@Injectable()
export class DataService {
    private data: Phone[] = [
        {name: "Apple", price: 50000},
        {name: "HP", price: 43000},
        {name: "Alcatel", price: 3400}
    ];

    constructor(private logService: LogService) {
    }

    getData(): Phone[] {
        this.logService.write("operation get data");
        return this.data;
    }

    addData(name: string, price: number) {
        this.data.push(new Phone(name, price));
        this.logService.write("operation add data");
    }
}