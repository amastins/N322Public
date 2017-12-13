import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

/**
 * Generated class for the IdeasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ideas',
  templateUrl: 'ideas.html',
})
export class IdeasPage {

    freeIdeas: any;
    underIdeas: any;
    overIdeas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public data:DataProvider, public alertCtrl: AlertController) {
    this.freeIdeas = this.data.freeIdeaList;
    this.underIdeas = this.data.underIdeaList;
    this.overIdeas = this.data.overIdeaList;
  }

  renameFreeIdea(Idea): void {
      let prompt = this.alertCtrl.create({
          title: 'Edit idea description',
          message: "Add new idea description below.",
          inputs: [
              {
                name: 'desc',
                  value: Idea.desc
              }
          ],
          buttons: [
              {
                text: 'Cancel',
                  handler: data => {
                  console.log('Cancel clicked');
                  }
              },
              {
                text: 'Save',
                  handler: data => {
                  this.data.renameFreeIdea(Idea.id, data.desc);
                  }
              }
          ]
      });
      prompt.present();
  }

    renameUnderIdea(Idea): void {
        let prompt = this.alertCtrl.create({
            title: 'Edit idea description',
            message: "Add new idea description below.",
            inputs: [
                {
                    name: 'desc',
                    value: Idea.desc
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: data => {
                        this.data.renameUnderIdea(Idea.id, data.desc);
                    }
                }
            ]
        });
        prompt.present();
    }

    renameOverIdea(Idea): void {
        let prompt = this.alertCtrl.create({
            title: 'Edit idea description',
            message: "Add new idea description below.",
            inputs: [
                {
                    name: 'desc',
                    value: Idea.desc
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: data => {
                        this.data.renameOverIdea(Idea.id, data.desc);
                    }
                }
            ]
        });
        prompt.present();
    }

  deleteFreeIdea(id):void {
    this.data.deleteFreeIdea(id);
  }

  deleteUnderIdea(id):void {
    this.data.deleteUnderIdea(id);
  }

  deleteOverIdea(id):void {
    this.data.deleteOverIdea(id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdeasPage');
  }

}
