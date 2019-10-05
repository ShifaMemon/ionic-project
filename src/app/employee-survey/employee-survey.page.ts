import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-employee-survey',
  templateUrl: './employee-survey.page.html',
  styleUrls: ['./employee-survey.page.scss'],
})
export class EmployeeSurveyPage implements OnInit {

  surveyList : any = []
  surveyDetail: any = [];
  id;
  constructor(private apiService : AuthServiceService) { }

  ngOnInit() {
    this.surveyList = this.apiService.getSurveyList();
    this.id = localStorage.getItem('userId');
    this.getEDetail();
  }

  getEDetail(){
    this.apiService.getSurDetail(this.id).subscribe((res : any) => {
        if(res.status){
          this.surveyDetail = res.data;
        }
    })
  }

  // getId()
  // {
  //   this.apiService.fetchSurveyId(this.id).subscribe((res:any)=>{
  //     if(res.status)
  //     {
  //       this.surveyDetail = res.data;
  //     }
  //   })
  // }

}
