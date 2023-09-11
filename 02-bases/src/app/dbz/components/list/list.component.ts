import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

    @Input()
    public characterList: Character[] = [
        {
            name: 'Jamecho',
            power: 5000
        }
    ]

    onDeleteCharacter(index: number): void {
        // todo emit
        console.log({index});

    }
}
