import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
    selector: 'app-country-page',
    templateUrl: './country-page.component.html',
    styles: [
    ]
})
export class CountryPageComponent implements OnInit {

    public country1?: Country;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _countryService: CountryService,
        private _router: Router
    ) { }

    ngOnInit(): void {
        this._activatedRoute.params
            // .subscribe(params => { console.log(params); }
            // params['id']
            // .subscribe( ({id}) => { console.log(id); });
            // .subscribe( ( country ) => { console.log({country}); })
            .pipe(
                switchMap(({ id }) => this._countryService.searchCountrybyAlphaCode(id))
            )
            .subscribe(
                country => {

                    if (!country) return this._router.navigateByUrl('');
                    return this.country1 = country;

                }

            );
    }

}
