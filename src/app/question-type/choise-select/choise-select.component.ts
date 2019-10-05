import { Component, OnInit } from '@angular/core';
import { BaseQuestion } from '../baseQuestion';

@Component({
  selector: 'app-choise-select',
  templateUrl: './choise-select.component.html',
  styleUrls: ['./choise-select.component.scss'],
})
export class ChoiseSelectComponent extends BaseQuestion {

  constructor() {
    super()
   }

  ngOnInit() {}

}
