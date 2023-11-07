import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'pages',
        loadChildren: () => import('./pages/all-pages.module').then(m => m.AllPagesModule)
    },
    {
        path: '**',
        redirectTo: 'pages'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
