import { TestBed, inject } from '@angular/core/testing';

import { Image } from './image.model';

describe('Image model', () => {
    let image: Image;

    beforeEach(() => {
        TestBed.configureTestingModule({
        });

        image = new Image(2001, 'assets/mock/images/dover-1.jpg', 'Caption test');
    });

    it('id should be ', () => {
         expect(image.id).toEqual(2001);
    });

    it('url should be ', () => {
         expect(image.url).toEqual('assets/mock/images/dover-1.jpg');
    });

     it('caption should be ', () => {
         expect(image.caption).toEqual('Caption test');
    });
});
