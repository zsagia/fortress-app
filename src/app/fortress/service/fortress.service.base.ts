import { Injectable } from '@angular/core';

import { Fortress } from '../model/fortress.model';
import { FortressService } from './fortress.service';

@Injectable()
export abstract class FortressServiceBase implements FortressService {
    abstract getFortress(id: number): Promise<Fortress>;
    abstract getFortresses(): Promise<Array<Fortress>>;
}