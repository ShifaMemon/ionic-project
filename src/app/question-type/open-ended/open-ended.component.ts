import { BaseQuestion } from '../baseQuestion';
import { Component } from '@angular/core';

@Component({
  selector: 'app-open-ended',
  templateUrl: './open-ended.component.html',
  styleUrls: ['./open-ended.component.scss'],
})
export class OpenEndedComponent  extends BaseQuestion {

  constructor() { 
    super()
  }

  ngOnInit() {}

}
