import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

import { Character } from '../_interfaces/Character.interface';
import { CharacterPage } from '../_interfaces/CharacterPage.interface';
import { Episode } from '../_interfaces/Episode.interface';

@Injectable({
    providedIn: 'root'
})
export class RmserviceService {

    private apiUrlBase: string = 'https://rickandmortyapi.com/api/';

    constructor(private _http: HttpClient) { }

    getEpisodeData(query: number): Observable<Episode | null> {
        const url = `${this.apiUrlBase}episode/${query}`;
        return this._http.get<Episode>(url)
            .pipe(
                map(e => e ? e : null),
                catchError(() => of(null))
            );
    }

    getCharactersData(query: number[]): Observable<Character[] | null> {
        const url = `${this.apiUrlBase}character/${query}`;
        return this._http.get<Character[]>(url)
            .pipe(
                map(c => c ? c : null),
                catchError(() => of(null))
            );
    }

    getACharacterData(query: number): Observable<Character | null> {
        const url = `${this.apiUrlBase}character/${query}`;
        return this._http.get<Character>(url)
            .pipe(
                map(c => c ? c : null),
                catchError(() => of(null))
            );
    }

    extractIdsFromLinks(links: string[]): number[] {
        // example of link: "https://example.com/api/episode/1"
        let charIds: number[] = [];

        links.map((link) => {
            const matches = link.match(/(\d+)$/);
            return matches ? charIds.push(parseInt(matches[0], 10)) : null;
        });

        return charIds;
    }

    getDataFromCharacterPage(page: number): Observable<CharacterPage | null> {
        const url = `${this.apiUrlBase}character/?page=${page}`;
        return this._http.get<CharacterPage>(url)
            .pipe(
                map(cp => cp ? cp : null),
                catchError(() => of(null))
            );
    }
}
