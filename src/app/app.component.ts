import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatabaseProvider } from '../providers/database/database'


import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage: any = HomePage;
  rootPage: any = null;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, dbProvider: DatabaseProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      dbProvider.createDatabase().then(() => {
        this.openTabsPage(splashScreen);
      }).catch(e => {
        console.log(e);
        this.openTabsPage(splashScreen);

    });
  });
  }



 public openTabsPage(splashScreen: SplashScreen){
  splashScreen.hide();  
  this.rootPage = HomePage;

 }
}
