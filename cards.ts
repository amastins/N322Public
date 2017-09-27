import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the CardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage {

  cards = [
      {"img": "img1.jpg",
      "name": "Jane Doe",
      "description": "First day of school!"},

      {"img": "img2.jpg",
      "name": "John Dough",
      "description": "Fun fun"},

      {"img": "img3.jpg",
      "name": "Abby Nervous",
      "description": "My favorite of the day"},

      {"img": "img4.jpg",
          "name": "Bertha B",
          "description": "no caption"},

      {"img": "img5.jpg",
          "name": "Cary Cane",
          "description": "Yes"},

      {"img": "img6.jpg",
          "name": "David Doinge",
          "description": "Mispelled"},

      {"img": "img7.jpg",
          "name": "Evelyn Evers",
          "description": "Mambo #6"},

      {"img": "img8.jpg",
          "name": "Farrah Fine",
          "description": "Birthday!"},

      {"img": "img9.jpg",
          "name": "Gary Garbage",
          "description": "Blah"},

      {"img": "img10.jpg",
          "name": "Henry Harry Hur, 2nd",
          "description": "Beauty"}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  }

  deleteCard(cardItem) {
      let index = this.cards.indexOf(cardItem);
      this.cards.splice(index, 1);
  }

  visible = false;
  toggle(cardIcon) {
        let index = this.cards.indexOf(cardIcon);
        this.cards.splice(index);
      this.visible = !this.visible;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardsPage');
  }

}
