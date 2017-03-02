import { Image } from './image.model';

export class Fortress {
    id: number = 0;
    name: String;
    country: String;
    defaultImage: Image;
    description: String;
    history: String;

    constructor(id: number, name: String, country: String, defaultImage: Image, description: String, history: String) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.defaultImage = defaultImage;
        this.description = description;
        this.history = history;
    }
}