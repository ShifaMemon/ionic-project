
import { Component, OnInit, Input } from '@angular/core';

  export class BaseQuestion implements OnInit  {
  
    @Input() question : any;

    constructor() { }
  
    ngOnInit() {}

    saveAns(){
        
    }
   
  
  }
  