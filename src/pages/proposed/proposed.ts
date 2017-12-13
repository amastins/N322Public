import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

/**
 * Generated class for the ProposedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proposed',
  templateUrl: 'proposed.html',
})
export class ProposedPage {

   proposal: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public data: DataProvider) {
    this.proposal = this.data.proposalList;
  }

  // editProposal(proposal): void {
  //   let prompt = this.alertCtrl.create({
  //       title: 'Edit plan proposal',
  //       message: "Edit plan proposal to fit new plan.",
  //       inputs: [
  //           {
  //             name: 'name',
  //               value: proposal.name,
  //               placeholder: "Event name"
  //           },
  //           {
  //             name: 'descrip',
  //               value: proposal.descrip,
  //               placeholder: "Description"
  //           },
  //           {
  //             name: 'date',
  //               value: proposal.date,
  //               placeholder: "Date (xx/xx/xx)"
  //           }
  //       ],
  //       buttons: [
  //           {
  //               text: 'Cancel',
  //               handler: data => {
  //                 console.log('Cancel');
  //               }
  //           },
  //           {
  //             text: 'Save',
  //               handler: data => {
  //               this.data.editttProposal(proposal.id, data.descrip, data.date, data.name);
  //               }
  //           }
  //       ]
  //   });
  //   prompt.present();
  // }

  addProposal(): void {
    let prompt = this.alertCtrl.create({
        title: 'Add new plan proposal',
        message: "Add the following info for a new plan proposal.",
        inputs: [
            {
              name: 'name',
                placeholder: 'event name'
            },
            {
              name: 'img',
                placeholder: 'Add event image URL'
            },
            {
              name: 'descrip',
                placeholder: 'Add brief description of plan'
            },
            {
              name: 'date',
                placeholder: 'Add date for event (xx/xx/xx)'
            }
        ],
        buttons: [
            {
              text: 'Cancel',
                handler: data => {
                console.log('Cancel');
                }
            },
            {
              text: 'Save',
                handler: data => {
                    this.data.addProposal(data);
                }
            }
        ]
    });
    prompt.present();
  }

  // deleteProposal(id): void {
  //   this.data.deleteProposal(id);
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProposedPage');
  }

}
