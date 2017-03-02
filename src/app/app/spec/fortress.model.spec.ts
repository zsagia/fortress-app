import { TestBed, inject } from '@angular/core/testing';

import { Fortress } from '../model/fortress.model';

describe('Fortress model', () => {
    let fortress: Fortress;

    beforeEach(() => {
        TestBed.configureTestingModule({
        });

        fortress = new Fortress('Fortress1');
    });

    it('Fortress name should be ', () => {
         expect(fortress.name).toEqual('Fortress1');
    });
});
