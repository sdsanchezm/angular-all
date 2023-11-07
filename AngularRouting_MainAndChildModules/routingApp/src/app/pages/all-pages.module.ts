import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about/about-routing.module';
import { HometRoutingModule } from './home/home-routing.module';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


@NgModule({
    declarations: [
        AboutComponent,
        HomeComponent,
    ],
    imports: [
        CommonModule,
        AboutRoutingModule,
        HometRoutingModule,
    ],
    exports: [
        AboutRoutingModule,
        HometRoutingModule
    ]
})
export class AllPagesModule { }
