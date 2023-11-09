import { Observable } from "rxjs/internal/Observable";
import { Country } from "./country";

export interface methodsofCountriesService {
    getCountriesData(query: string) : Observable<Country | null>;
    getCountriesByCapital(query: string): Observable<Country[]>;
    getCountriesByCountry(query: string): Observable<Country[]>;
    getCountriesByRegion(query: string): Observable<Country[]>;
}
