import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "http://localhost/temp/public/index.php/api/";
  constructor(
    private HttpClient : HttpClient
  ) { }

  employeeCountList(){
    return this.HttpClient.get(this.baseUrl + "employeeCountList");
  }
}
