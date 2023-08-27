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

    get capitalizedName(): string {
        return this.name.toUpperCase();
    }

    // when using provate, thje method cannot be used outside of the class
    getHeroDescription(): string {
        return `${this.name} - ${this.age}`;
    }

    changeHero(): void {
        //TODO:
        // throw 'metodo no implementado'
        // this.name = HeroToChoose.batman.toString();
        this.name = "batman";
    }

    changeAge(): void {
        // change age
        // this.age = parseInt(Math.random() * 100);
        const newAge = Math.ceil(Math.random() * 100);
        this.age = newAge.toString();
    }

}

enum HeroToChoose {
    "batman",
    "superman",
    "hulk",
    "loki"
}
