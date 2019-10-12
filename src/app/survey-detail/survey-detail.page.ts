import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-survey-detail',
  templateUrl: './survey-detail.page.html',
  styleUrls: ['./survey-detail.page.scss'],
})
export class SurveyDetailPage implements OnInit {

  surverInfo : any = {};
  currentQuestionNumber = 0;
  currentQuestion :  any  = {};
  surveyDetail: any;
  id;
  constructor( private auService : AuthServiceService) { }

  ngOnInit() {
    var data = {}
    this.surverInfo =  this.auService.getSurveyDetail(data);   
    this.currentQuestion = this.surverInfo.questions[this.currentQuestionNumber];
    this.id = localStorage.getItem('userId');
    //this.getEDetail();
    this.getSid();
    
  }

  changePage(value){
    this.currentQuestionNumber += value;
    this.currentQuestion = this.surverInfo.questions[this.currentQuestionNumber];
  }

  // getEDetail(){
  //   this.auService.getSurDetail(this.id).subscribe((res : any) => {
  //       if(res.status){
  //         this.surveyDetail = res.data;
  //       }
  //   })
  // }

  getSid(){
    this.auService.SurveyQId(this.id).subscribe((res : any) => {
        if(res.status){
          this.surveyDetail = res.data;
        }
    })
  }

}
