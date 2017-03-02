import { Injectable } from '@angular/core';
import { Headers, Http, Response, XHRBackend, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Fortress } from '../model/fortress.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WeightedScreenService {

    actionUrl: string;

    headers: Headers;

    constructor (private http: Http) {
    }

    getFortresse(x: number): Observable<Array<Fortress>> {
        return this.http.get()
            .map(
                (response: Response) => <Array<Fortress>>response.json()
            )
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);

        return Observable.throw(error.json().error || 'Server error');
    }
}

