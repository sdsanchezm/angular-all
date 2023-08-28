import { Component } from '@angular/core';

@Component({
    selector: 'app-heroes-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent {
    public title: string = "list page in Heroes";
    public heroNames: string[] = ['Spiderman', 'Batman', 'Hulk', 'Thor', 'Panter'];
    public deletedHero?: string;

    removeLastHero(): void {
        this.deletedHero = this.heroNames.pop();
        // console.log(deletedHero);
    }
}
