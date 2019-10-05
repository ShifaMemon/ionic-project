import { NgModule } from '@angular/core';

import { OpenEndedComponent } from './open-ended/open-ended.component';
import { OpenEndedMultilineComponent } from './open-ended-multiline/open-ended-multiline.component';
import { ChoiseComponent } from './choise/choise.component';
import { MultiChoiseComponent } from './multi-choise/multi-choise.component';
import { ChoiseSelectComponent } from './choise-select/choise-select.component';
import { MultiChoiseSelectComponent } from './multi-choise-select/multi-choise-select.component';
import { IonicModule } from '@ionic/angular';




@NgModule({
    declarations: [
        OpenEndedComponent,
        OpenEndedMultilineComponent,
        ChoiseComponent,
        MultiChoiseComponent,
        ChoiseSelectComponent,
        MultiChoiseSelectComponent
    ],
    imports: [IonicModule],
    exports: [
        OpenEndedComponent,
        OpenEndedMultilineComponent,
        ChoiseComponent,
        MultiChoiseComponent,
        ChoiseSelectComponent,
        MultiChoiseSelectComponent
    ]
})

export class QuestionTypeModule {}