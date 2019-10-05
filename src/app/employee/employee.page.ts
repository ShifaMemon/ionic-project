import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage implements OnInit {

  email = "";
  password = "";

  login = [];
  id;

  constructor(private apiService : AuthServiceService, private router :Router) { 
    this.id = localStorage.getItem("userId");
      if(this.id){
         this.getEmp();
      }
  }

  ngOnInit() {
  }
  doLogin()
  {
    var data = {
      email : this.email,
      password : this.password
    }  
    this.apiService.emplogin(data) .subscribe((res:any) => {
      if(res.status)
      {
        localStorage.setItem("email",res.data.email);
        localStorage.setItem("userId", res.data.id);
        this.router.navigateByUrl("/employee-detail");
      }
      else
      {
        alert(res.message);
      }
    })
  }
  getEmp(){
    this.apiService.fetchEId(this.id).subscribe((res:any)=>{
      if(res.status)
     {
      this.router.navigateByUrl("/employee-detail");
      }
    })
  }
  logout(){
    localStorage.clear();
    this.router.navigateByUrl("../employee")
}
}
