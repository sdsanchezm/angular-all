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

    searchTags(tag: string):void {
        this._tagsHistory.unshift( tag );
    }


}
