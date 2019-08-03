import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMenuPage } from './company-menu.page';

describe('CompanyMenuPage', () => {
  let component: CompanyMenuPage;
  let fixture: ComponentFixture<CompanyMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
