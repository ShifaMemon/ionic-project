import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public companyPages = [
    {
      title: 'Profile',
      url: '/company-profile'
    },
    {
      title: 'Survey',
      url: '/company-survey'
    },{
      title: 'Department',
      url: '/company-department'
    },
    {
      title: 'Employees',
      url: '/company-employees'
    },
    {
      title: 'Feedback',
      url: '/company-feedback'
    }
  ];
  public employePages = [
    {
      title: 'E Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'E List',
      url: '/list',
      icon: 'list'
    }
  ];

  isCompany = false;
  enableMenu = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  

  getMenuList(){
    if(this.isCompany){
      return this.employePages;
    }else{
      return this.companyPages;
    }
    
  }
}
