import { Component, OnInit } from '@angular/core';
import { BaseQuestion } from '../baseQuestion';

@Component({
  selector: 'app-multi-choise-select',
  templateUrl: './multi-choise-select.component.html',
  styleUrls: ['./multi-choise-select.component.scss'],
})
export class MultiChoiseSelectComponent extends BaseQuestion {

  constructor() {
    super();
   }

  ngOnInit() {}

}
