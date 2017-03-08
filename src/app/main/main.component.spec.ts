/* tslint:disable:no-unused-variable */
import { async, fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainViewComponent } from './main.component';
import { FortressComponent } from '../fortress/fortress.component';
import { MockFortressServiceImpl } from '../mock/service/mock.fortress.service.impl';

import { RouterTestingModule } from '@angular/router/testing';

describe('MainComponent', () => {
    let component: MainViewComponent;
    let fixture: ComponentFixture<MainViewComponent>;

    beforeEach(async(() => {
        let testBed = TestBed.configureTestingModule({
            declarations: [ MainViewComponent, FortressComponent ],
            providers: [ MockFortressServiceImpl ],
            imports: [ RouterTestingModule ]
        });
    
        testBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', fakeAsync(() => {
    expect(component).toBeTruthy();
  }));
});
