import { Component } from '@angular/core';

import { CountryService } from '../_services/countries.service';
import { Country } from '../_interfaces/country';

@Component({
    selector: 'pages-country-bycapital',
    templateUrl: './bycapital.component.html',
    styleUrls: ['./bycapital.component.css']
})
export class BycapitalComponent {

    public countryList: Country[] = [];

    constructor(private _service: CountryService) { }

    searchByCapital(q: string): void {
        this._service.getCountriesByCapital(q.toString())
            .subscribe(countries => {
                this.countryList = countries;
            })
    }
}
