import { Component, OnInit } from '@angular/core';
import { BaseQuestion } from '../baseQuestion';

@Component({
  selector: 'app-choise',
  templateUrl: './choise.component.html',
  styleUrls: ['./choise.component.scss'],
})
export class ChoiseComponent extends BaseQuestion {

  constructor() {
    super()
   }

  ngOnInit() {}

}
