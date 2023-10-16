import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-child-component2',
    templateUrl: './child-component2.component.html'
})
export class ChildComponent2Component {

    @Input() tempIn: string | undefined;

    @Output() TempCEmiter = new EventEmitter();

    constructor() {

    }

    emit_tempC(){
        const t1 = this.tempIn;
        this.TempCEmiter.emit(t1);
    }


}
