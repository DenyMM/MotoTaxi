import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GananciasPage } from './ganancias.page';

describe('GananciasPage', () => {
  let component: GananciasPage;
  let fixture: ComponentFixture<GananciasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GananciasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GananciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
