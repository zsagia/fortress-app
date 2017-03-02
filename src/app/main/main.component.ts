import { Component } from '@angular/core';

import { Fortress } from '../model/fortress.model';
import { FortressComponent } from '../fortress/fortress.component';
import { FortressService } from '../service/fortress.service';

@Component({
  selector: 'main-display',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainViewComponent {
    title: String = 'Fortresses';
    fortresses: Array<Fortress> = [];

    constructor(private fortressService: FortressService) {
       this.getFortresses();  
    }

    getFortresses() {
        this.fortressService.getFortresses().then(fortresses => this.fortresses = fortresses);
    }
}