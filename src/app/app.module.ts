import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ConfirmedPage} from "../pages/confirmed/confirmed";
import {IdeasPage} from "../pages/ideas/ideas";
import {ProposedPage} from "../pages/proposed/proposed";
import { DataProvider } from '../providers/data/data';
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { FIREBASE_CONFIG } from "./firebase.config";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
      ConfirmedPage,
      IdeasPage,
      ProposedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      AngularFireModule.initializeApp(FIREBASE_CONFIG),
      AngularFirestoreModule.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
      ConfirmedPage,
      IdeasPage,
      ProposedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
