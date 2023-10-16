import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'dataBinding';

    m1_text = "asd";
    m2_text: string;

    // @Input() public item1Current: string;
    public item1Current: string;

    parentVar: string;

    // @Output() customEvent = new EventEmitter<string>();

    // @Output() onCustomAction = new EventEmitter<string>();


    constructor() {
        this.m2_text = "new";
        this.eventData = "initial EventData";
        // this.item1 = '';
        this.item1Current = '';
        this.parentVar = 'initial text from parent';
        this.userInput = '';
        this.modifiedUserInput = '';
    }

    someAction(kk1: string) {
        this.item1Current = kk1;
        console.log(kk1);

    }

    // child component 2 stuff ==============
    userInput: string;
    modifiedUserInput: string;

    handleModifiedInput(modifiedText: string) : void{
        this.modifiedUserInput = modifiedText;
    }


    // ================
    m2() {
        console.log("m2 pressed");
    }

    m3() {
        console.log("asd");
        this.m1_text = "zxc";
    }

    m4() {
        // this.customEvent.emit("from emit - from m4");
    }

    eventData: string;

    m4_receiver(data: string) {
        this.eventData = data;
    }

    messageFromChild: string = '';

    handleEvent() {
        // this.messageFromChild = message;
    }


}
