import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CountriesRoutingModule } from './countries-routing.module';

import { Gini2019Pipe } from './_pipes/gini2019.pipe';

import { BycapitalComponent } from './bycapital/bycapital.component';
import { BycountryComponent } from './bycountry/bycountry.component';
import { ByregionComponent } from './byregion/byregion.component';
import { TableCountriesComponent } from './_components/table-countries/table-countries.component';
import { TopCountriesComponent } from './_components/top-countries/top-countries.component';
import { CountryPageComponent } from './country-page/country-page.component';


@NgModule({
    declarations: [
        BycapitalComponent,
        BycountryComponent,
        ByregionComponent,
        CountryPageComponent,
        Gini2019Pipe,
        TableCountriesComponent,
        TopCountriesComponent,
    ],
    imports: [
        CommonModule,
        CountriesRoutingModule,
        RouterModule,
    ]
})
export class CountriesModule { }
