import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  public emp = [
    {
      title: 'Employee_Detail',
      url: '/employee-detail',
      //icon: 'home'
    },
    {
      title: 'Employee_Survey',
      url: '/employee-survey',
      //icon: 'list'
    },
    {
      title: 'Survey_Detail',
      url: 'survey-detail',
      //icon: 'list'
    }
  ];

  isemp = false;
  enable=true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router : Router,
    private menu: MenuController
  ) {
    this.initializeApp();
    this.getmenu();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  getmenu()
  {
    if(this.isemp)
    {
      alert("No menus here...!!!");
    }
    else
    {
      return this.emp;
    }
  }

  navigate(url){
    this.menu.close('first');
  }
  logout(){
      localStorage.clear();
      this.router.navigateByUrl("/employee")
  }
}
