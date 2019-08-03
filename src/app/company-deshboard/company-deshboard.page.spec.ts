import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDeshboardPage } from './company-deshboard.page';

describe('CompanyDeshboardPage', () => {
  let component: CompanyDeshboardPage;
  let fixture: ComponentFixture<CompanyDeshboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDeshboardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDeshboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
