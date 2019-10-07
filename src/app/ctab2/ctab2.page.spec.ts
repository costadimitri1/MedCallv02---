import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctab2Page } from './ctab2.page';

describe('Ctab2Page', () => {
  let component: Ctab2Page;
  let fixture: ComponentFixture<Ctab2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ctab2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ctab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
