import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyLoginPage } from './company-login.page';

describe('CompanyLoginPage', () => {
  let component: CompanyLoginPage;
  let fixture: ComponentFixture<CompanyLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
