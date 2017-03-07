import { Fortress } from '../fortress/model/fortress.model';

export interface FortressService {
    getFortress(id: number): Promise<Fortress>;
    getFortresses(): Promise<Array<Fortress>>;
}