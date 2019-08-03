import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmployeeRegistrationPage } from './employee-registration.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeRegistrationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmployeeRegistrationPage]
})
export class EmployeeRegistrationPageModule {}
