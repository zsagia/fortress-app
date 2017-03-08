import { Injectable } from '@angular/core';

import { FORTRESSES } from '../fortress.mock';
import { Fortress } from '../../fortress/model/fortress.model';
import { FortressServiceBase } from '../../fortress/service/fortress.service.base';

@Injectable()
export class MockFortressServiceImpl extends FortressServiceBase {
    getFortress(id: number): Promise<Fortress> {
        return this.getFortresses()
            .then(fortresses => fortresses.find(fortress => fortress.id === id));
    }

    getFortresses(): Promise<Array<Fortress>> {
        return Promise.resolve(FORTRESSES);
    }
}