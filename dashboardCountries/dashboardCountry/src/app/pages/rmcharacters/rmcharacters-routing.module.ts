import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharacterComponent } from './character/character.component';
import { EpisodeComponent } from './episode/episode.component';
import { LocationComponent } from './location/location.component';
import { CharacterPageComponent } from './character-page/character-page.component';

const routes: Routes = [
    {
        path: 'location',
        component: LocationComponent
    },
    {
        path: 'episode',
        component: EpisodeComponent
    },
    {
        path: 'character',
        component: CharacterComponent
    },
    {
        path: 'c/:characterid',
        component: CharacterPageComponent
    },
    {
        path: '**',
        redirectTo: 'episode'
    }

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class RmcharactersRoutingModule { }
