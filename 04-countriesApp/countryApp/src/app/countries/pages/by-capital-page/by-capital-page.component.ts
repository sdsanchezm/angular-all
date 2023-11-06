import { Component, ElementRef, ViewChild } from '@angular/core';

import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
    selector: 'app-by-capital-page',
    templateUrl: './by-capital-page.component.html',
    styles: [
    ]
})
export class ByCapitalPageComponent {

    public countryList: Country[] = [];

    constructor(private _service: CountryService) { }

    searchByCapital(term: string): void {
        this._service.searchCapital(term.toString())
            .subscribe(countries => {
                this.countryList = countries;
            })
        console.log("hallo aus byCapital");
        console.log({ term });
    }

}
