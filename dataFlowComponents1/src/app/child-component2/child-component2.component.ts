import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component2',
  templateUrl: './child-component2.component.html',
  styleUrls: ['./child-component2.component.css']
})
export class ChildComponent2Component {

    @Input() txtInNgModel: string;

    @Output() textInNGModelOutput = new EventEmitter<string>();

    constructor() {
        this.txtInNgModel = '';
    }

    emit_modified_input(){
        const txt1 = this.txtInNgModel.toUpperCase();
        this.textInNGModelOutput.emit(txt1);
    }


}
