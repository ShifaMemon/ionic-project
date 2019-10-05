import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.page.html',
  styleUrls: ['./employee-detail.page.scss'],
})
export class EmployeeDetailPage implements OnInit {

  constructor(private apiService : AuthServiceService , private router : Router) { }

  empDetail:any={};
  id;

  ngOnInit() {
    this.id = localStorage.getItem('userId');
    this.getId();
  }

  getEDetail(){
    this.apiService.getEmpDetail().subscribe((res : any) => {
        if(res.status){
          this.empDetail = res.data;
        }
    })
  }
  getId()
  {
    this.apiService.fetchEId(this.id).subscribe((res:any)=>{
      if(res.status)
      {
        this.empDetail = res.data;
      }
    })
  }
  logout(){
    localStorage.clear();
    this.router.navigateByUrl("../employee")
}
  
}
