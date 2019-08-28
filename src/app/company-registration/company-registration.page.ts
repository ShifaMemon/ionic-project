import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.page.html',
  styleUrls: ['./company-registration.page.scss']
})
export class CompanyRegistrationPage implements OnInit {

  employeeSizes = [];

  c_name= "";
  email = "";
  address = "";
  phone_no = "";
  no_of_emp = "";
  status = "Pending";
  password = "";
  companies = [];
  

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.getEmpSize()
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
          c_name : this. c_name,
          email : this.email,
          address : this.address,
          phone_no : this.phone_no,
          no_of_emp : this.no_of_emp,
          status : this.status,
          password : this.password,
        }
   this.apiService.companyRegister(data).subscribe((res : any) =>
    {
      if(res.status){
        this.companies = res.data;
    }})
  }
}