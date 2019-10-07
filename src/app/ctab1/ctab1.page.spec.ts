import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctab1Page } from './ctab1.page';

describe('Ctab1Page', () => {
  let component: Ctab1Page;
  let fixture: ComponentFixture<Ctab1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ctab1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ctab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
