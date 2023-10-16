import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component1',
  templateUrl: './child-component1.component.html'
})
export class ChildComponent1Component {

    @Input() TemperatureC: string;

    @Output() TemperatureCOutput = new EventEmitter();

    constructor() {
        this.TemperatureC ='';
    }

    temperature_emiter(){
        const t1 = this.TemperatureC;
        this.TemperatureCOutput.emit(t1);
    }

}
