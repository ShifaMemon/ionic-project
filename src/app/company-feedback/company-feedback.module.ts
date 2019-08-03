import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CompanyFeedbackPage } from './company-feedback.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyFeedbackPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CompanyFeedbackPage]
})
export class CompanyFeedbackPageModule {}
