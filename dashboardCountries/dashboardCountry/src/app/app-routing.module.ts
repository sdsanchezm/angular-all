import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'countries',
        loadChildren: () => import('./pages/countries/countries.module').then(m => m.CountriesModule)
        // loadChildren: () => import('./pages/allpages.module').then(m => m.AllpagesModule)
    },
    {
        path: 'rm',
        loadChildren: () => import('./pages/rmcharacters/rmcharacters.module').then(m => m.RmcharactersModule)
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
