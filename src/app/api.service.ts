import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "http://localhost/survey_report/public/index.php/api/";
  constructor(
    private HttpClient : HttpClient,
    
  ) { }

  
  deptId
  employeeCountList(){
    return this.HttpClient.get(this.baseUrl + "employeeCountList");
  }
  DeptId(){
    return this.HttpClient.get(this.baseUrl + "deptId");
  }
  companyLogin(data)
  {
    return this.HttpClient.post(this.baseUrl + "login",data);
  }
  companyRegister(data)
  {
    return this.HttpClient.post(this.baseUrl + "registration",data);
  }
  employeeRegister(data)
  {
    return this.HttpClient.post(this.baseUrl + "emp_register",data);
  }
}
