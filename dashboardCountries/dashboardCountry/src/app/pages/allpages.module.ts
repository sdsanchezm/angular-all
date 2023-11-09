import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesModule } from './countries/countries.module';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


@NgModule({
    declarations: [
        AboutComponent,
        HomeComponent,
    ],
    imports: [
        CommonModule,
        CountriesModule,
    ]
})
export class AllpagesModule { }
