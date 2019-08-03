import { Component, OnInit } from '@angular/core';
import { logging } from 'protractor';

@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.page.html',
  styleUrls: ['./company-login.page.scss'],
})
export class CompanyLoginPage implements OnInit {

  username = "";
  password = "";
  constructor() { }

  ngOnInit() {
  }
    login()
    {
      alert(this.username);
    }


}
