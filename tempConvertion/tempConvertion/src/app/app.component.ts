import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    title = 'tempConvertion';
    result: number;
    resultAdd: number;
    number1: number;
    number2: number;
    kk1Result: number;
    kk2Result: number;
    kk3Result: number;

    @ViewChild('kk3')
    public kk3Tag!: ElementRef<HTMLInputElement>;

    constructor() {
        this.result = 2;
        this.resultAdd = 1;
        this.number1 = 0;
        this.number2 = 0;
        this.kk1Result = 0;
        this.kk2Result = 0;
        this.kk3Result = 0;
        this.userInput = '';
        this.temp1Input = 0;
        this.temp2Input = 0;
        this.temp1modified = 0;
        this.temp2modified = 0;
    }

    // child temperature component
    userInput: string;

    handleModifiedInput(num1: string) {
        const numx = num1;
        this.userInput = numx;
    }

    // chidld component 2
    tempInput: string | undefined;
    handleInput(txt1: string) {
        this.tempInput = txt1;
    }

    // child component 3
    temp1Input: number;
    temp2Input: number;
    temp1modified: number;
    temp2modified: number;
    handleTemp1(n1: number) {
        const x1 = n1*(9/5) + 32;
        // this.temp1modified = x1;
        this.temp2Input = x1;
    }

    handleTemp2(n2: number) {
        const x2 = (n2 - 32)*(5/9);
        this.temp1Input = x2;
    }


    temp1(): void {
    }

    temp2(): number {
        return 1;
    }

    tempPlus1() {
        this.result += 1;
        console.log(this.result);

    }

    tempMinus1() {
        this.result -= 1;
        console.log(this.result);
    }

    addNumbers(num1: number, num2: number): void {
        this.resultAdd = num1 + num2;
    }

    log1(some: string) {
        console.log(`enter pressed. ${some}`);
    }

    log2(num2: string) {
        const num2_res: number = parseInt(num2);
        console.log(num2_res + 1);
        this.kk2Result = num2_res + 1;
    }

    log3() {
        const kk3Value = this.kk3Tag.nativeElement.value;
        // this.kk3Result = parseInt(kk3Value + 2);
        console.log({ kk3Value });
        this.kk3Tag.nativeElement.value = '';

    }

}
