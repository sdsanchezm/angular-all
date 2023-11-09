import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RmcharactersRoutingModule } from './rmcharacters-routing.module';

import { CharacterComponent } from './character/character.component';
import { CharacterPageComponent } from './character-page/character-page.component';
import { EpisodeComponent } from './episode/episode.component';
import { LocationComponent } from './location/location.component';



@NgModule({
    declarations: [
        CharacterComponent,
        CharacterPageComponent,
        EpisodeComponent,
        LocationComponent,
    ],
    imports: [
        CommonModule,
        RmcharactersRoutingModule,
    ]
})
export class RmcharactersModule { }
