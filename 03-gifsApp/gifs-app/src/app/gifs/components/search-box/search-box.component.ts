import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';


@Component({
    selector: 'gifs-search-box',
    templateUrl: 'search-box.component.html'
})

export class SearchBoxComponent {

    // this is a decorator that takes the identifier: txtTagInput from the inpuit box, to handle it from here
    // after the decorator, no need to use argument in functions that require it
    @ViewChild('txtTagInput')
    public tagInput!: ElementRef<HTMLInputElement>;

    constructor( private gifsService: GifsService ) { }

    searchTag() {
        const newTag = this.tagInput.nativeElement.value;
        // console.log({newTag});
        this.gifsService.searchTags(newTag);
        // cleaning the input box
        this.tagInput.nativeElement.value = '';
    }
}
