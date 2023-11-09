import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { RmserviceService } from '../_services/rmservice.service';
import { Character } from '../_interfaces/Character.interface';

@Component({
    selector: 'app-character-page',
    templateUrl: './character-page.component.html',
    styles: [
    ]
})
export class CharacterPageComponent implements OnInit {

    public characterData?: Character;

    constructor(
        private _service: RmserviceService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this._activatedRoute.params
            .pipe(
                switchMap(({ characterid }) => this._service.getACharacterData(characterid as number))
            )
            .subscribe(character => {
                if (!character) return this._router.navigateByUrl('');
                return this.characterData = character;
            });
    }
}
