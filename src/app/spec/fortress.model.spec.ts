import { TestBed, inject } from '@angular/core/testing';

import { Fortress } from '../model/fortress.model';

describe('Fortress model', () => {
    let fortress: Fortress;

    beforeEach(() => {
        TestBed.configureTestingModule({
        });

        fortress = new Fortress(1001, 'Fortress1', 'Hősia', {id: 2001, url: ''});
    });

    it('Fortress name should be ', () => {
         expect(fortress.name).toEqual('Fortress1');
    });

    it('Fortress id should be ', () => {
         expect(fortress.id).toEqual(1);
    });

    it('Fortress country should be ', () => {
         expect(fortress.country).toEqual('Hősia');
    });
});
