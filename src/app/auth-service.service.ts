import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService
{
  baseUrl = "http://192.168.0.103/sur/public/index.php/api/";

  constructor(private httpClient : HttpClient) 
  { 

  }

  getSurveyList(){
    return [
        {survey_id : 1 ,name : "Survey 1", start_date : "2019-12-12", end_date : "2020-12-12", },
        {survey_id : 2 ,name : "Survey 2", start_date : "2019-12-12", end_date : "2020-12-12", },
        {survey_id : 3 ,name : "Survey 3", start_date : "2019-12-12", end_date : "2020-12-12", }
      ]
    }
  
  getSurveyDetail(data)
  {
    return  {
          survey_id : 1 ,
          name : "Survey 1", 
          start_date : "2019-12-12", 
          end_date : "2020-12-12",
          questions: [
            {question_id : 1, title : "What is your name" , answer : "", type : "OpenEnded"},
            {question_id : 2, title : "What is you address" , answer : "", type : "OpenEndedMultiLine"},
            {question_id : 3, title : "What is your Hobbies" , answer : "", type : "MultiChoise" , options : ["reading", "singing", "dancing"]},
            {question_id : 4, title : "What is your eduction" , answer : "", type : "Choise",  options : ["MCA", "MBA", "MBBS"] },
            {question_id : 5, title : "What is your different skills" , answer : "", type : "MultiChoiseSelect" , options : ["reading", "singing", "dancing"]},
            {question_id : 6, title : "What is your height" , answer : "", type : "ChoiseSelect",  options : ["MCA", "MBA", "MBBS"] },
            
          ]
      }
    }   
    
    
  getEmpDetail()
  {
    return this.httpClient.get(this.baseUrl + "empDetail");
  }
  emplogin(data)
  {
    return this.httpClient.post(this.baseUrl + "EmpLogin",data);
  }
  fetchEId(id)
  {
    return this.httpClient.get(this.baseUrl + "empId/"+id);
  }
  getSurDetail(id)
  {
    return this.httpClient.get(this.baseUrl + "surveyDetail/"+id);
  }
  SurveyQId(id)
  {
    return this.httpClient.get(this.baseUrl + "survey_id/"+id);
  }
  saveFormData(data)
  {
    return this.httpClient.post(this.baseUrl + "save_answer", data);
  }

}