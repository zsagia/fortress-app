import { TestBed, inject } from '@angular/core/testing';

import { Fortress } from './fortress.model';

describe('Fortress model', () => {
    let fortress: Fortress;
    
    const FORTRESS_ID: number = 1001;
    const FORTRESS_NAME: String = 'Fortress1';
    const FORTRESS_COUNTRY: String = 'Hősia';
    const FORTRESS_TYPE: String = 'fortress';
    const FORTRESS_DESCRIPTION: String = 'Description text';
    const FORTRESS_HISTORY: String = 'History text';

    beforeEach(() => {
        TestBed.configureTestingModule({});

        fortress = new Fortress(
            FORTRESS_ID, FORTRESS_NAME, FORTRESS_COUNTRY,
            {id: 2001, url: '', caption: ''}, FORTRESS_DESCRIPTION ,
            FORTRESS_HISTORY, FORTRESS_TYPE);
    });

    it('name should be ', () => {
         expect(fortress.name).toEqual(FORTRESS_NAME);
    });

    it('id should be ', () => {
         expect(fortress.id).toEqual(FORTRESS_ID);
    });

    it('country should be ', () => {
         expect(fortress.country).toEqual(FORTRESS_COUNTRY);
    });

    it('type should be ', () => {
         expect(fortress.type).toEqual(FORTRESS_TYPE);
    });

    it('defaultImage should be ', () => {
         expect(fortress.defaultImage).toBeTruthy();
    });

    it('description should be ', () => {
         expect(fortress.description).toEqual(FORTRESS_DESCRIPTION);
    });

    it('history should be ', () => {
         expect(fortress.history).toEqual(FORTRESS_HISTORY);
    });
});
