import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

    @Output()
    public onDeleteCharacter = new EventEmitter<string>(); // same as below
    // public onDeleteCharacter: EventEmitter<number> = new EventEmitter(); // same as above

    @Input()
    public characterList: Character[] = [
        {
            name: 'Jamecho',
            power: 5000
        }
    ]

    onDeleteCharacter_emiter(id?: string): void {

        if (!id) return;

        console.log({id});

        this.onDeleteCharacter.emit(id);

    }

    // onDeleteCharacter_emiter(index: number): void {
    //     console.log({index});
    //     this.onDeleteCharacter.emit(index);

    // }
}
