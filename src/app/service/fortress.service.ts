import { Injectable } from '@angular/core';

import { Fortress } from '../model/fortress.model';

import { FORTRESSES } from '../mock/fortress.mock';

@Injectable()
export class FortressService {

    getFortress(id: number): Promise<Fortress> {
        return this.getFortresses()
            .then(fortresses => fortresses.find(fortress => fortress.id === id));
    }

    getFortresses(): Promise<Fortress[]> {
        return Promise.resolve(FORTRESSES);
    }
}

