import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CLoginRegisterPage } from './c-login-register.page';

describe('CLoginRegisterPage', () => {
  let component: CLoginRegisterPage;
  let fixture: ComponentFixture<CLoginRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLoginRegisterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CLoginRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
