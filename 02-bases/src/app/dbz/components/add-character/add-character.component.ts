import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-dbz-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})

export class AddCharacterComponent {

    @Output()
    public onNewCharacter: EventEmitter<Character> = new EventEmitter();

    public character: Character =
        {
            name: '',
            power: 11
        };

        emitCharacter(): void
        {
            console.log(this.character);

            if (this.character.name.length === 0 ) return;

            this.onNewCharacter.emit(this.character);

            // cleaning here, after submit
            this.character = { name: "", power: 0 };
        }
}
