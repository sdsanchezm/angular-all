import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
    selector: 'gifs-card-list',
    templateUrl: './card-list.component.html',
    // template: `<h2>asd</h2>`
    styleUrls: ['./card-list.component.css']
})


export class CardListComponent {

    @Input()
    public gifsInCardList: Gif[] = [];

}
