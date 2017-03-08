import { Image } from '../model/image.model';

export interface ImageService {
    getImage(id: number): Image;
    getImages(): Promise<Image>;
}