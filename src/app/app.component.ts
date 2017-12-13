import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ProposedPage } from "../pages/proposed/proposed";
import { ConfirmedPage } from "../pages/confirmed/confirmed";
import { IdeasPage } from "../pages/ideas/ideas";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // lets menu navigate to pages
    this.pages = [
      { title: "Home", component: HomePage },
      { title: "Proposed Plans", component: ProposedPage },
        { title: "Confirmed Plans", component: ConfirmedPage },
        { title: "Ideas", component: IdeasPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  displayPage(page) {
    // Reset the content nav to have just this page
    this.nav.setRoot(page.component);
  }
}
