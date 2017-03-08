import { Injectable } from '@angular/core';

import { Fortress } from '../model/fortress.model';
import { FORTRESSES } from '../../mock/fortress.mock';
import { FortressServiceBase } from '../service/fortress.service.base';

@Injectable()
export class FortressServiceImpl extends FortressServiceBase {
    getFortress(id: number): Promise<Fortress> {
        return this.getFortresses()
            .then(fortresses => fortresses.find(fortress => fortress.id === id));
    }

    getFortresses(): Promise<Fortress[]> {
        return Promise.resolve(FORTRESSES);
    }
}

