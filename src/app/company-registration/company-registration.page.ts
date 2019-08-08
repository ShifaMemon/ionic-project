import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.page.html',
  styleUrls: ['./company-registration.page.scss']
})
export class CompanyRegistrationPage implements OnInit {

  employeeSizes = [];

  comp_nm="";
  password = "";
  email ="";
  comp_address = "";
  comp_cno = "";
  no_emp = "";
  comp_status = "Pending";

  registerations = [];
  

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.getEmpSize()
    this.doRegister()
    
  }

  getEmpSize(){
    this.apiService.employeeCountList().subscribe((res : any) => {
        if(res.status){
          this.employeeSizes = res.data;
        }
    })
  }
  doRegister()
  {
        var data = 
        {
          comp_nm : this.comp_nm,
          password : this.password,
          email : this.email,
          comp_address : this.comp_address,
          comp_cno : this.comp_cno,
          no_emp : this.no_emp,
          comp_status : this.comp_status,
        }
   this.apiService.companyRegister(data).subscribe((res : any) =>
    {
      if(res.status){
        this.registerations = res.data;
    }})
  }
}