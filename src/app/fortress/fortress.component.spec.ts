/* tslint:disable:no-unused-variable */
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from "@angular/router";
import { RouterTestingModule } from '@angular/router/testing';

import { FortressComponent } from './fortress.component';

describe('FortressComponent', () => {
    let component: FortressComponent;
    let fixture: ComponentFixture<FortressComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ FortressComponent ],
            imports: [RouterTestingModule.withRoutes([])]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FortressComponent);
        component = fixture.componentInstance;

        component.fortress = {
            id: 1006,
            name: 'Golconda Fort',
            country: 'India',
            type: 'fortress',
            defaultImage: {id: 2006, url: 'assets/mock/images/golconda-fort-2.jpg', caption: ''},
            description: '',
            history: ''
        };

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });


});
