import { Component } from '@angular/core';
import {Keyboard, NavController} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";
import {DescriptionPage} from "../description/description"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
    providers: [
        Keyboard
    ]
})
export class HomePage {

  displayLists:any;

  constructor(public navCtrl: NavController, public data:DataProvider, public keyboard:Keyboard) {

  }

  ionViewDidLoad() {
    this.displayLists = this.data.lists;
  }

  itemClicked(item):void {
    this.navCtrl.push('DescriptionPage', item);
  }

}
