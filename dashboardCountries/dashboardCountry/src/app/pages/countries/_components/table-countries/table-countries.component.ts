import { Component, Input } from '@angular/core';

import { Country } from '../../_interfaces/country';

@Component({
    selector: 'components-table-countries',
    templateUrl: './table-countries.component.html',
    styleUrls: ['./table-countries.component.css']
})
export class TableCountriesComponent {

    @Input()
    public countries: Country[] = [];

}
