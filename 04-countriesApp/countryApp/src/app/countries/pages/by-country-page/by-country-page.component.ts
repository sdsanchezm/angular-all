import { Component } from '@angular/core';

import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
    selector: 'app-by-country-page',
    templateUrl: './by-country-page.component.html',
    styles: [
    ]
})
export class ByCountryPageComponent {

    public countryList: Country[] = [];

    constructor(private _service: CountryService) { }

    searchByCountry(term: string): void {
        this._service.searchCountry(term.toString())
            .subscribe(countries => {
                this.countryList = countries;
            })
    }

}
