/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FortressComponent } from './fortress.component';

describe('FortressComponent', () => {
  let component: FortressComponent;
  let fixture: ComponentFixture<FortressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FortressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FortressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
