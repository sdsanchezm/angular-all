import { Component, EventEmitter, Output } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { DbzService } from "../services/dbz.service";

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    constructor( private dbzService: DbzService ){}

    get characters(): Character[] {
        return [...this.dbzService.characters];
    };

    onNewCharacter2(newCharacter: Character):void{
        this.dbzService.onNewCharacter2(newCharacter);
    }

    deleteCharacterById(id: string):void{
        this.dbzService.deleteCharacterById(id);
    }

}
