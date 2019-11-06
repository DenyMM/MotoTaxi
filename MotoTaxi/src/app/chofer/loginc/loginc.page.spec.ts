import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincPage } from './loginc.page';

describe('LogincPage', () => {
  let component: LogincPage;
  let fixture: ComponentFixture<LogincPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogincPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
