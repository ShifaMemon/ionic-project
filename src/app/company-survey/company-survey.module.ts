import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CompanySurveyPage } from './company-survey.page';

const routes: Routes = [
  {
    path: '',
    component: CompanySurveyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CompanySurveyPage]
})
export class CompanySurveyPageModule {}
