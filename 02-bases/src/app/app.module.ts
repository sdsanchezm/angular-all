import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/components/counter.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';
// import { HeroComponent } from './heroes/hero/hero.component';
// import { ListComponent } from './heroes/list/list.component';
// import { CounterComponent } from './counter/counter.component';


@NgModule({
    declarations: [
        AppComponent,
        // CounterComponent,
        // HeroComponent,
        // ListComponent,
    ],
    imports: [
        BrowserModule,
        CounterModule,
        HeroesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
