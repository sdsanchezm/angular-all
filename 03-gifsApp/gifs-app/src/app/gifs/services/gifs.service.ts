import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { env_dev } from 'src/environment/env.dev';

// this decorator, will make accessible and injectable this class into the html document
@Injectable({providedIn: 'root'})
export class GifsService {

    private _tagsHistory: string[] = [];

    constructor( private http: HttpClient ) { }

    get tagsHistory() {
        // in js, arrays pass by reference, so a copy of the object is required (and that's why a spread operator is needed)
        return [...this._tagsHistory];
    }

    cleanedTag(tag: string) {

        tag = tag.toLowerCase();

        if (this._tagsHistory.includes(tag)){
            this._tagsHistory = this._tagsHistory.filter( p => p !== tag);
        }

        this._tagsHistory.unshift( tag );
        this._tagsHistory = this.tagsHistory.splice(0, 10);
        // this._tagsHistory.pop();
    }


    searchTags(tag: string):void {
        if (tag.length === 0) return;
        this.cleanedTag(tag);

        const params = new HttpParams()
        .set('api_key', env_dev.api_key)
        .set('q', tag)
        .set('limit', '2')


        this.http.get(`${env_dev.api_url}`, { params })
        .subscribe( res => {
            console.log(res);
        })

    }

    // first way to do it
    getDataWithFetch1(tag: string): void{
        if (tag.length === 0) return;
        this.cleanedTag(tag);
        fetch(`${env_dev.api_url}?api_key=${env_dev.api_key}&q=${tag}&limit=2`)
        .then( response => response.json() )
        .then( data => console.log(data) );

    }

    // same as above but with async await and assignment
    // axios can also be used
    async getDataWithFetch2(tag: string): Promise<void>{
        if (tag.length === 0) return;
        this.cleanedTag(tag);
        const res = await fetch(`${env_dev.api_url}?api_key=${env_dev.api_key}&q=${tag}&limit=2`);
        const data = await res.json();
        console.log(data);
    }
}

