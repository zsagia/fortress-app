import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Fortress } from '../fortress/model/fortress.model';
import { FortressServiceImpl } from '../fortress/service/fortress.service.impl';

@Component({
  selector: 'fortress-detail',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.css']
})
export class DetailedViewComponent implements OnInit {
    @Input()
    fortress: Fortress;

  constructor (
        private fortressService: FortressServiceImpl,
        private route: ActivatedRoute,
        private location: Location) {
    }

  ngOnInit() {
      this.route.params.forEach((params: Params) => {
            let id = +params['id'];

            this.fortressService.getFortress(id)
                .then(fortress => this.fortress = fortress);
        });
  }

  goBack(): void {
        this.location.back();
    }

}
