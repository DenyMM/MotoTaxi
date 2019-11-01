import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionPage } from './opcion.page';

describe('OpcionPage', () => {
  let component: OpcionPage;
  let fixture: ComponentFixture<OpcionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
