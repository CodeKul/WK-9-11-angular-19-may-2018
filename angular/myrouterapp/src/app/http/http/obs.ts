import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MyObservable {

    constructor(
        private http: HttpClient
    ) {

    }
    processing(): Observable<number> {
        return Observable.create(sub => {
            for (let i = 0; i < 100; i++) {
                sub.next(i)
            }
            sub.complete()
        })
    }

    cityInfo(cty: string): Observable<Object> {
        let url = 'https://www.metaweather.com/api/location/search/?query=' + cty
        return this.http.get(`https://www.metaweather.com/api/location/search/?query=${cty}`)
    }

    onlinePlayers(): Observable<Object> {
        return this.http.get('https://api.bf4stats.com/api/onlinePlayers?output=json')
    }
    postData(): Observable<Object> {

        let rt = {} as RootObject
        rt.ps3 = {} as Pc
        rt.ps3.label = 'android'

        return this.http.post('', rt)
    }
} 
