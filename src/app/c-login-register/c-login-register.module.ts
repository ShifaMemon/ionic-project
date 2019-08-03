import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CLoginRegisterPage } from './c-login-register.page';

const routes: Routes = [
  {
    path: '',
    component: CLoginRegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CLoginRegisterPage]
})
export class CLoginRegisterPageModule {}
