import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
    providedIn: 'root'
})

export class DbzService {


    public characters: Character[] = [
        {
            name: 'Krillin',
            power: 1000,
        },
        {
            name: 'Goku',
            power: 9100
        },
        {
            name: 'Picoro',
            power: 3000
        }
    ]

    onNewCharacter2(character: Character): void {
        console.log('MainPage');
        console.log(character);
        // add a new character at the end
        this.characters.push(character);

        // add a new character at the beggining
        // this.characters.unshift(character);
    }

    onDeleteCharacter2(index: number):void {
        console.log("on Delete here");
        this.characters.splice(index, 1);
    }

}