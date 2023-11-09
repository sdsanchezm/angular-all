import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

import { methodsofCountriesService } from '../_interfaces/countries.interface';
import { Country } from '../_interfaces/country';

@Injectable({
    providedIn: 'root'
})
export class CountryService implements methodsofCountriesService {

    private apiUrlBase: string = 'https://restcountries.com/v3.1';

    constructor(private _http: HttpClient) { }

    getCountriesData(query: string): Observable<Country | null> {
        const url = `${this.apiUrlBase}/alpha/${query}`;
        return this._http.get<Country[]>(url)
            .pipe(
                map(countries => countries.length > 0 ? countries[0] : null),
                catchError(() => of(null))
            );
    }

    getCountriesByCapital(query: string): Observable<Country[]> {
        const url = `${this.apiUrlBase}/capital/${query}`;
        return this._http.get<Country[]>(url)
            .pipe(
                catchError(() => of([]))
            );
    }

    getCountriesByCountry(query: string): Observable<Country[]> {
        const url = `${this.apiUrlBase}/name/${query}`;
        return this._http.get<Country[]>(url)
            .pipe(
                catchError(() => of([]))
            );
    }

    getCountriesByRegion(query: string): Observable<Country[]> {
        const url = `${this.apiUrlBase}/region/${query}`;
        return this._http.get<Country[]>(url)
            .pipe(
                catchError(() => of([]))
            );
    }



}
