import { Component } from '@angular/core';

import { Fortress } from '../fortress/model/fortress.model';
import { FortressComponent } from '../fortress/fortress.component';
import { FortressServiceImpl } from '../fortress/service/fortress.service.impl';

@Component({
  selector: 'main-display',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainViewComponent {
    title: String = 'Fortresses';
    fortresses: Array<Fortress> = [];

    constructor(private fortressService: FortressServiceImpl) {
       this.getFortresses();  
    }

    getFortresses() {
        this.fortressService.getFortresses().then(fortresses => this.fortresses = fortresses);
    }
}