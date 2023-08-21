import { Component } from '@angular/core';

@Component({
    selector: 'app-heroes-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})
export class HeroComponent {
    public title: string = 'Hero Page';

    public name: string = 'ironman';
    public age: string = '33';

}
