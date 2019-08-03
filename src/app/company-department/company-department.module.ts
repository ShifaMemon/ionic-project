import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CompanyDepartmentPage } from './company-department.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyDepartmentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CompanyDepartmentPage]
})
export class CompanyDepartmentPageModule {}
