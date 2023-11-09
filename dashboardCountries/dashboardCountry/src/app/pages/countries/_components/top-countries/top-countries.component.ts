import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'components-top-countries',
    templateUrl: './top-countries.component.html',
    styleUrls: ['./top-countries.component.css']
})
export class TopCountriesComponent {

    @Input() public title: string = '';

    @Output()
    public onValue = new EventEmitter<string>();

    public pagename: string = '';

    constructor() { }

    ngOnInit() {
        this.pagename = `Search Country By ${this.title}`;
    }

    emitValue1(value: string): void {
        this.onValue.emit(value)
        console.log(value);
    }

}
