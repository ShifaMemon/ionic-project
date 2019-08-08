import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "http://localhost/temp/public/index.php/api/";
  constructor(
    private HttpClient : HttpClient,
    
  ) { }

  

  employeeCountList(){
    return this.HttpClient.get(this.baseUrl + "employeeCountList");
  }
  companyLogin(data)
  {
    return this.HttpClient.post(this.baseUrl + "login",data);
  }
  companyRegister(data)
  {
    return this.HttpClient.post(this.baseUrl + "registration",data);
  }
}
