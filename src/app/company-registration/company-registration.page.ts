import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.page.html',
  styleUrls: ['./company-registration.page.scss'],
})
export class CompanyRegistrationPage implements OnInit {

  employeeSizes = [];
  registerations = [];

  constructor(
    private apiService : ApiService
  ) { }

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

    this.apiService.companyRegister().subscribe((res : any) => {
      if(res.status){
        this.registerations = res.data;
      }
  })

  }
}
