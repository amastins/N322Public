import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    items = {};

    constructor(public navCtrl: NavController, public dataService: DataProvider) {
        this.items = dataService.getData();
        console.log(this.items);
    }

}