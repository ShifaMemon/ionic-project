import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SurveyDetailPage } from './survey-detail.page';
import { OpenEndedComponent } from '../question-type/open-ended/open-ended.component';
import { OpenEndedMultilineComponent } from '../question-type/open-ended-multiline/open-ended-multiline.component';
import { ChoiseComponent } from '../question-type/choise/choise.component';
import { MultiChoiseComponent } from '../question-type/multi-choise/multi-choise.component';
import { ChoiseSelectComponent } from '../question-type/choise-select/choise-select.component';
import { MultiChoiseSelectComponent } from '../question-type/multi-choise-select/multi-choise-select.component';

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
  ],
  declarations: [SurveyDetailPage, OpenEndedComponent,
    OpenEndedMultilineComponent,
    ChoiseComponent,
    MultiChoiseComponent,
    ChoiseSelectComponent,
    MultiChoiseSelectComponent  ]
})
export class SurveyDetailPageModule {}
