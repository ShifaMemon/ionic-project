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
  email="";
  address="";
  phone_no="";
  dept_id=";"
  status="";
  password="";

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
            emp_nm : this. status,
            emp_email : this.email,
            emp_pass : this.address,
            emp_cno : this.phone_no,
            dept_id : this.dept_id,
            emp_status : this.status,
           // emp_pass : this.password,
          }
     this.apiService.employeeRegister(data).subscribe((res : any) =>
      {
        if(res.status){
          this.employees = res.data;
      }})
    }
  }

