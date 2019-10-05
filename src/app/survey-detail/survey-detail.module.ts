import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SurveyDetailPage } from './survey-detail.page';
import { QuestionTypeModule } from '../question-type/question-type';

const routes: Routes = [
  {
    path: '',
    component: SurveyDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    QuestionTypeModule
  ],
  declarations: [SurveyDetailPage]
})
export class SurveyDetailPageModule {}
