import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySurveyPage } from './company-survey.page';

describe('CompanySurveyPage', () => {
  let component: CompanySurveyPage;
  let fixture: ComponentFixture<CompanySurveyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanySurveyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySurveyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
