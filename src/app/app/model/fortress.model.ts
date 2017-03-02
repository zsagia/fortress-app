import { Image } from './image.model';

export class Fortress {
    id: number = 0;
    name: String;
    country: String;
    defaultImage: Image;

    constructor(name) {
        this.name = name;
    }
}