import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-child-component',
    templateUrl: './child-component.component.html',
    styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {

    @Input() public textInNGModel: string;

    @Output() public textInNGModelOutput = new EventEmitter<string>();

    @Input() public item1: string;

    @Input() public textFromParent: string;

    @Output()
    public onTest1: EventEmitter<string> = new EventEmitter();

    @Output()
    public onCustomAction: EventEmitter<string> = new EventEmitter();

    constructor() {
        // this.text1 = '';
        this.item1 = "item1 from ctor";
        this.textFromParent = 'initial text in child';
        this.textInNGModel ='';
    }

    m1() {
        console.log("asd");
        this.onTest1.emit("child component text");
    }

    onCustomAction_emiter() {
        this.onCustomAction.emit("from emiter");
    }



}
