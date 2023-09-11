import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

console.log( uuid() );


@Injectable({
    providedIn: 'root'
})

export class DbzService {

    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Krillin',
            power: 1000,
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 9100
        },
        {
            id: uuid(),
            name: 'Picoro',
            power: 3000
        }
    ]

    onNewCharacter2(character: Character): void {

        const newCharacter: Character = { ...character, id: uuid() };

        console.log('MainPage');
        console.log(character);

        // add a new character at the end
        this.characters.push(newCharacter);

        // add a new character at the beggining
        // this.characters.unshift(character);
    }

    // onDeleteCharacter2(index: number):void {
    //     console.log("on Delete here");
    //     this.characters.splice(index, 1);
    // }

    deleteCharacterById(id: string): void {
        // this.characters.findIndex(character => character.id === id);
        this.characters = this.characters.filter(character => character.id !== id);
    }

}
