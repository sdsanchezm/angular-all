import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';

import { CountryService } from '../_services/countries.service';
import { Country } from '../_interfaces/country';

@Component({
    selector: 'pages-country-page',
    templateUrl: './country-page.component.html',
    styles: [
    ]
})
export class CountryPageComponent implements OnInit {

    public countryData?: Country;

    constructor(
        private _service: CountryService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this._activatedRoute.params
            .pipe(
                switchMap(({ countrycode }) => this._service.getCountriesData(countrycode))
            )
            .subscribe(country => {
                if (!country) return this._router.navigateByUrl('');
                return this.countryData = country;
            });
        //this.test1();
    }

    test1() {
        let x1 = [
            {
                "name": {
                    "common": "Germany",
                    "official": "Federal Republic of Germany",
                    "cca3": "deu",
                    "nativeName": {
                        "deu": {
                            "official": "Bundesrepublik Deutschland",
                            "common": "Deutschland"
                        }
                    }
                },
                "languages": {
                    "deu": "German",
                    "esp": "Espanol"
                },
                "gini": {
                    "2019": 51.3
                },
            }
        ];

        console.log(`asd: `);
    }
}
