import { Component } from '@angular/core';

import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {

    constructor(private gifsService: GifsService ) {}

    get gifs() {
        return this.gifsService.tagsHistory;
    }

    searchTagFromPreviousSearch(previouslySeachedTag: string) {
        this.gifsService.searchTags(previouslySeachedTag);
    }

    // testing public property here
    public kk1: string[] = ["asd", "qwe"];
}
