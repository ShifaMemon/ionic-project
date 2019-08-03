import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDepartmentPage } from './company-department.page';

describe('CompanyDepartmentPage', () => {
  let component: CompanyDepartmentPage;
  let fixture: ComponentFixture<CompanyDepartmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDepartmentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDepartmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
