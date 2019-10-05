import { Component, OnInit } from '@angular/core';
import { BaseQuestion } from '../baseQuestion';

@Component({
  selector: 'app-multi-choise',
  templateUrl: './multi-choise.component.html',
  styleUrls: ['./multi-choise.component.scss'],
})
export class MultiChoiseComponent extends BaseQuestion {

  constructor() {
    super()
   }

  ngOnInit() {}

}
