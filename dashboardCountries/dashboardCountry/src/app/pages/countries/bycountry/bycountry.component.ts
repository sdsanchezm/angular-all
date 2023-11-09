import { Component } from '@angular/core';

import { CountryService } from '../_services/countries.service';
import { Country } from '../_interfaces/country';

@Component({
    selector: 'pages-country-bycountry',
    templateUrl: './bycountry.component.html',
    styleUrls: ['./bycountry.component.css']
})
export class BycountryComponent {

    public countryList: Country[] = [];

    constructor(private _service: CountryService) { }

    searchByCountry(q: string): void {
        this._service.getCountriesByCountry(q.toString())
            .subscribe(c => {
                this.countryList = c;
            })
    }

}
