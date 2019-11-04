import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrocPage } from './registroc.page';

describe('RegistrocPage', () => {
  let component: RegistrocPage;
  let fixture: ComponentFixture<RegistrocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrocPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
