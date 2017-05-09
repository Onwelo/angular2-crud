import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Car } from './car.model';
import { appConfig } from '../config';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CarsService {
    private url = `${appConfig.api.url}cars`;
    private headers = new Headers({ 'X-apikey': appConfig.api.key });
    private options = new RequestOptions({ headers: this.headers });
    constructor(private http: Http) { }

    get(): Observable<Car[]> {
        return this.http.get(this.url, this.options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw('Server error'));
    }

    getOne(id: number): Observable<Car> {
        return this.http.get(this.url + `/${id}`, this.options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw('Server error'));
    }

    save(car: Car): Observable<Car[]> {
        return this.http.post(this.url, car, this.options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw('Server error'));
    }

    delete(car: Car): Observable<Car[]> {
        return this.http.delete(this.url + `/${car._id}`, this.options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw('Server error'));
    }
}