import { Component } from '@angular/core';

import { RmserviceService } from '../_services/rmservice.service';

import { Character } from '../_interfaces/Character.interface';
import { Episode } from '../_interfaces/Episode.interface';
import { switchMap } from 'rxjs';

@Component({
    selector: 'app-episode',
    templateUrl: './episode.component.html',
    styles: [
        `
        .btn1-width {
            width: 50px;
        }
        .k1 {
            font-size: 20px;
        }
        `
    ]
})
export class EpisodeComponent {


    public episodes: number[] = [];
    public episodeData?: Episode | null;
    public charactersData?: Character[] | null = [];

    constructor(private _service: RmserviceService) {
        for (let i = 0; i < 51; i++) {
            this.episodes.push(i + 1);
        }
    }

    getDataFromEpisode(q: number): void {
        let charsTemp: number[];
        console.log(q);
        this._service.getEpisodeData(q)
            .pipe(
                switchMap(episode => {
                    this.episodeData = episode;
                    charsTemp = this._service.extractIdsFromLinks(episode!.characters);
                    return this._service.getCharactersData(charsTemp);
                })
            )
            .subscribe(cd => {
                this.charactersData = cd;
            });
    }
}
