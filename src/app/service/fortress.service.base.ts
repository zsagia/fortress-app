import { Fortress } from '../fortress/model/fortress.model';
import { FortressService } from './fortress.service';

export abstract class FortressServiceBase implements FortressService {
    abstract getFortress(id: number): Promise<Fortress>;
    abstract getFortresses(): Promise<Array<Fortress>>;
}