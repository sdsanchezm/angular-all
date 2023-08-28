import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h3>Counter component</h3>
    <h3>counter: {{ counter }}</h3>
    <button (click)="increaseBy(2)" >+1</button>
    <button (click)="decreaseBy()" >-1</button>
    <button (click)="resetButton()" >Reset</button>
    `
})

export class CounterComponent {
    constructor() { }

    public counter: number = 10;

    increaseBy(value: number): void {
        this.counter += value;
    }

    decreaseBy(): void {
        this.counter -= 1;
    }

    resetButton(): void {
        this.counter = 10;
    }
}
