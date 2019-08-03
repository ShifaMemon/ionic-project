import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CompanyEmployeesPage } from './company-employees.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyEmployeesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CompanyEmployeesPage]
})
export class CompanyEmployeesPageModule {}
