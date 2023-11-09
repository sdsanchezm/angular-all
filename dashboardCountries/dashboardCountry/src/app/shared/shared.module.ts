import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { TableCountriesComponent } from './table-countries/table-countries.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
    declarations: [
        FooterComponent,
        NavbarComponent,
        TopbarComponent,
        TableCountriesComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        FooterComponent,
        NavbarComponent,
        TopbarComponent,
        TableCountriesComponent,
    ]
})
export class SharedModule { }
