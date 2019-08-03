import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CompanyDeshboardPage } from './company-deshboard.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyDeshboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CompanyDeshboardPage]
})
export class CompanyDeshboardPageModule {}
