import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEmployeesPage } from './company-employees.page';

describe('CompanyEmployeesPage', () => {
  let component: CompanyEmployeesPage;
  let fixture: ComponentFixture<CompanyEmployeesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyEmployeesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyEmployeesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
