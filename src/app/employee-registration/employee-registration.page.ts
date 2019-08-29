import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.page.html',
  styleUrls: ['./employee-registration.page.scss'],
})
export class EmployeeRegistrationPage implements OnInit {
  departments=[];

  e_name="";
  password="";
  email="";
  address="";
  phone_no="";
  dept_id=";"
  status="";
  company_id="";
  d_id = "";
  

  employees=[];

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.getDeptId();
    this.doEmpRegister();
  }
  getDeptId(){
    this.apiService.employeeCountList().subscribe((res : any) => {
        if(res.status){
          this.departments = res.data;
        }
    })
  }
    doEmpRegister()
    {
          var data = 
          {
            ename : this. status,
            emp_pass : this.password,
            email : this.email,
            address : this.address,
            phone_no : this.phone_no,
            dept_id : this.dept_id,
            status : this.status,
            company_id : this.company_id,
            d_id : this.d_id,
            
          }
     this.apiService.employeeRegister(data).subscribe((res : any) =>
      {
        if(res.status){
          this.employees = res.data;
      }})
    }
  }

