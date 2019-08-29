import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmployeeDeshboardPage } from './employee-deshboard.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeDeshboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmployeeDeshboardPage]
})
export class EmployeeDeshboardPageModule {}
