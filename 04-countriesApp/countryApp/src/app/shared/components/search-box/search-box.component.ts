import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'shared-search-box',
    templateUrl: './search-box.component.html',
    styles: [
    ]
})
export class SearchBoxComponent {

    @Input()
    public placeholder1: string = '';

    @Output()
    public onValue = new EventEmitter<string>();

    emitValue1(value: string): void {
        this.onValue.emit(value)

    }

}
