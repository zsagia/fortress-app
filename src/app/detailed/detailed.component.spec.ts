/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DetailedViewComponent } from './detailed.component';
import { MockFortressServiceImpl } from '../mock/service/mock.fortress.service.impl';

import { RouterTestingModule } from '@angular/router/testing';

describe('DetailedComponent', () => {
  let component: DetailedViewComponent;
  let fixture: ComponentFixture<DetailedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ DetailedViewComponent ],
        providers: [
            MockFortressServiceImpl
        ],
        imports: [
            RouterTestingModule
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
