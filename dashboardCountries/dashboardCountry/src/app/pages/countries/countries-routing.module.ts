import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BycapitalComponent } from './bycapital/bycapital.component';
import { BycountryComponent } from './bycountry/bycountry.component';
import { ByregionComponent } from './byregion/byregion.component';
import { CountryPageComponent } from './country-page/country-page.component';


const routes: Routes = [
    {
        path: 'by-country',
        component: BycountryComponent
    },
    {
        path: 'by-region',
        component: ByregionComponent
    },
    {
        path: 'by-capital',
        component: BycapitalComponent
    },
    {
        path: 'p/:countrycode',
        component: CountryPageComponent
    },
    {
        path: '**',
        redirectTo: 'by-country'
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class CountriesRoutingModule { }
