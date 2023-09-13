import { Injectable } from '@angular/core';

// this decorator, will make accessible and injectable this class into the html document
@Injectable({providedIn: 'root'})
export class GifsService {

    private _tagsHistory: string[] = [];

    constructor() { }

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




    }


}
