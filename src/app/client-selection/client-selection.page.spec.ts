import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSelectionPage } from './client-selection.page';

describe('ClientSelectionPage', () => {
  let component: ClientSelectionPage;
  let fixture: ComponentFixture<ClientSelectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSelectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
