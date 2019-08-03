import { Component, ViewChild } from '@angular/core';
import {  IonicPage, NavController , NavParams } from '@ionic/angular';
/* import { Title } from '@angular/platform-browser';
export interface PageInterface{
  title: string;
  pageName: string;
  tabComponent?:any;
  index?:number;
  icon : string; 
}
@IonicPage() */
@Component({
  selector: 'app-company-menu',
  templateUrl: './company-menu.page.html',
  styleUrls: ['./company-menu.page.scss'],
})
export class CompanyMenuPage{

 /*  rootPage = 'company_profile';

  @ViewChild(Nav) nav: Nav;
  pages: PageInterface[]={
    {title: 'tab1' , pageName: 'TabsPage' , tabcomponent: 'Tab1Page' , index: 0,icon: 'home'}
  }

  constructor(public navCtrl : NavController , public navParams : NavParams) { 

  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad MenuPage');
  }
 */
  ngOnInit() {
    
  }

}
