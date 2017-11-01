import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {

    items = {"colors": [
        {name: "bronze"},
        {name: "gold"},
        {name: "tan"},
        {name: "brown"},
        {name: "ivory"},
        {name: "nude"},
        {name: "white"},
        {name: "beige"},
        {name: "taupe"},
        {name: "black"},
        {name: "gray"}]
    };

    constructor() {
        console.log('Hello DataProvider Provider');
    }

    getData(): Array {
        return this.items.colors;
    };

}