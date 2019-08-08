import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IonicStorageModule } from '@ionic/storage';

@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.page.html',
  styleUrls: ['./company-login.page.scss'],
})
export class CompanyLoginPage implements OnInit {

  email = "";
  password = "";
  
  login = [];
  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.doLogin()
  }
    /* login()
    {
      alert(this.email);
    } */
doLogin(){

  var data = 
  {
    email : this.email,
    password : this.password,
  }
  this.apiService.companyLogin(data).subscribe((res : any) => {
    if(res.status){
      this.login = res.data;
    }})
  }
}

