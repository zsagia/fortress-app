import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

import { Fortress } from './model/fortress.model';

@Component ({
    selector: 'fortress-display',
    templateUrl: './template/fortress.component.html',
    styleUrls: [
        './css/fortress.component.css'
        ]
})

export class FortressComponent implements OnInit {
    @Input()
    fortress: Fortress;

    @Input()
    fortressId: number;

    public iconUrl: String;

    constructor(private router: Router) {

    }

    ngOnInit(): void {
        if (this.fortressId) {
            this.getFortress();
        }

        this.setIconUrl();
    }

    getFortress(): void {

    }

    setIconUrl() {
        let iconUrl = 'assets/icons/';

        if (this.fortress.type === Fortress.TYPE_CASTLE) {
            iconUrl = iconUrl + 'castle.png';
        } else {
            iconUrl = iconUrl + 'fortress.png';
        }

        this.iconUrl =  iconUrl;
    }

    goToDetail(): void{
        this.router.navigate(['detailedview', this.fortress.id]);
    }
}