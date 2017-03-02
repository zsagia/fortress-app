import { Component, OnInit, Input } from '@angular/core';

import { Fortress } from '../model/fortress.model';

@Component ({
    selector: 'fortress',
    templateUrl: '../template/fortress.component.html'
})

export class FortressComponent implements OnInit {
    @Input()
    fortress: Fortress;

    @Input()
    fortressId: number;

    getFortress(): void {

    }

    ngOnInit(): void {
        if (this.fortressId) {
            this.getFortress();
        }
    }

}