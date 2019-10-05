import { Component, OnInit } from '@angular/core';
import { BaseQuestion } from '../baseQuestion';

@Component({
  selector: 'app-open-ended-multiline',
  templateUrl: './open-ended-multiline.component.html',
  styleUrls: ['./open-ended-multiline.component.scss'],
})
export class OpenEndedMultilineComponent extends BaseQuestion {

  constructor() {
    super()
   }

  ngOnInit() {}

}
