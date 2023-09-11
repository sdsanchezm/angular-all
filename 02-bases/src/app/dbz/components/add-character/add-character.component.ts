import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-dbz-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})

export class AddCharacterComponent {

    public character: Character =
        {
            name: '',
            power: 11
        };

        emitCharacter(): void
        {
            console.log(this.character);

        }
}
