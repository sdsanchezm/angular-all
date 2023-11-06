import { Component } from '@angular/core';

import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
    selector: 'app-by-region-page',
    templateUrl: './by-region-page.component.html',
    styles: [
    ]
})

export class ByRegionPageComponent {

    public countryList: Country[] = [];

    constructor(private _service: CountryService) { }

    searchByRegion(term: string): void {
        this._service.searchRegion(term.toString())
            .subscribe(countries => {
                this.countryList = countries;
            })
    }

}
