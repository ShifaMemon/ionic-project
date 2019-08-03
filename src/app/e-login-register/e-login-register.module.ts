import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ELoginRegisterPage } from './e-login-register.page';

const routes: Routes = [
  {
    path: '',
    component: ELoginRegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ELoginRegisterPage]
})
export class ELoginRegisterPageModule {}
