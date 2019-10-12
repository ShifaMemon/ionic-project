import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-survey-detail',
  templateUrl: './survey-detail.page.html',
  styleUrls: ['./survey-detail.page.scss'],
})
export class SurveyDetailPage implements OnInit {

  surverInfo : any = {};
  currentQuestionNumber = 0;
  currentQuestion :  any  = {};
  surveyDetail: any = {};
  id;
  sId;
  constructor( private auService : AuthServiceService, private route: Router, private activeRoute : ActivatedRoute) {
    
   }

  ngOnInit() {

    this.activeRoute.params.subscribe((res) => {
      this.sId = res['id'];
      this.getSid();
    })
    
    var data = {}
    this.id = localStorage.getItem('userId');
 }

  changePage(value){
    this.currentQuestionNumber += value;
  
    this.currentQuestion = this.surveyDetail.questions[this.currentQuestionNumber];
  }

  getSid(){
    this.auService.SurveyQId(this.sId).subscribe((res : any) => {
        if(res.status){
          this.surveyDetail = res.data;          
          this.currentQuestion = this.surveyDetail.questions[0];
        }
    })
  }
  finish(){
    
    var opti = {
      userId : this.id,
      question : this.surveyDetail.questions
    }
    this.auService.saveFormData(opti).subscribe((res : any) => {
      this.route.navigateByUrl("/employee-survey");  
    })
  }
}
