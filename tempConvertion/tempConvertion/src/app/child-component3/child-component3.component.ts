import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-child-component3',
    templateUrl: './child-component3.component.html'
})
export class ChildComponent3Component {

    @Input() temp1: number;
    @Input() temp2: number;

    @Output() temp1Output = new EventEmitter();
    @Output() temp2Output = new EventEmitter();

    constructor() {
        this.temp1 = 0;
        this.temp2 = 0;
    }

    temp1Emiter() {
        const n1 = this.temp1;
        this.temp1Output.emit(n1);
    }

    temp2Emiter() {
        const n2 = this.temp2;
        this.temp2Output.emit(n2);
    }

}
