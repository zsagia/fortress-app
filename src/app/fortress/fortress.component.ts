import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

import { Fortress } from '../model/fortress.model';

@Component ({
    selector: 'fortress-display',
    templateUrl: '../template/fortress.component.html',
    styles: [`
        :host img {
            width: 100%;
            height: 100%;
        }
    `]
})

export class FortressComponent implements OnInit {
    @Input()
    fortress: Fortress;

    @Input()
    fortressId: number;

    constructor(private router: Router) {

    }

    ngOnInit(): void {
        if (this.fortressId) {
            this.getFortress();
        }
    }

    getFortress(): void {

    }

    goToDetail(): void{
        this.router.navigate(['detailedview', this.fortress.id]);
    }
}