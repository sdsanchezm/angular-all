import { Component } from '@angular/core';

import { Country } from '../_interfaces/country';
import { CountryService } from '../_services/countries.service';

@Component({
    selector: 'pages-country-byregion',
    templateUrl: './byregion.component.html',
    styleUrls: ['./byregion.component.css']
})
export class ByregionComponent {

    public countryList: Country[] = [];
    // public title: string = 'Search Country By Region';

    constructor(private _service: CountryService) { }

    searchByRegion(q: string): void {
        this._service.getCountriesByRegion(q.toString())
            .subscribe(c => {
                this.countryList = c;
            })
    }

}
