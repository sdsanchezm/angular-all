import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, count, map, of } from "rxjs";

import { Country } from "../interfaces/country";


@Injectable({ providedIn: 'root' })
export class CountryService {

    private apiUrlBase: string = 'https://restcountries.com/v3.1';

    constructor(private _http: HttpClient) { }

    searchCountrybyAlphaCode(query: string): Observable<Country | null> {
        const url = `${this.apiUrlBase}/alpha/${query}`;
        return this._http.get<Country[]>(url)
            .pipe(
                map( countries => countries.length > 0 ? countries[0] : null),
                catchError( () => of( null ) )
            );
    }

    searchCapital(term: string): Observable<Country[]> {
        const url = `${this.apiUrlBase}/capital/${term}`;
        return this._http.get<Country[]>(url)
            .pipe(
                catchError(() => of([]))
                // catchError( error => { console.log( error ); return of([]);} )
                // tap( countries => console.log('t1', countries),
                // https://rxjs.dev/api/index/function/map
                // map( countries => []),
                // tap( countries => console.log('t1', countries)),
            );
    }

    searchCountry(query: string): Observable<Country[]> {
        const url = `${this.apiUrlBase}/name/${query}`;
        return this._http.get<Country[]>(url)
            .pipe(
                catchError(() => of([]))
            );
    }

    searchRegion(query: string): Observable<Country[]> {
        const url = `${this.apiUrlBase}/region/${query}`;
        return this._http.get<Country[]>(url)
            .pipe(
                catchError(() => of([]))
            );
    }


}
