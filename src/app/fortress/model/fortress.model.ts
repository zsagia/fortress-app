import { Image } from '../../image/image.model';

export class Fortress {
    public static readonly TYPE_CASTLE = "castle";
    public static readonly TYPE_FORTRESS = "fortress";

    public id: number = 0;
    public name: String;
    public country: String;
    public defaultImage: Image;
    public description: String;
    public history: String;
    public type: String;

    constructor(
            id: number, name: String, country: String,
            defaultImage: Image, description: String, history: String,
            type: String) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.defaultImage = defaultImage;
        this.description = description;
        this.history = history;
    }
}