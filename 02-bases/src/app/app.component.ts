import { Component } from '@angular/core';

// this is adecorator that transform the class into a component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title: string = 'pets page';
  public counter: number= 10;

  increaseBy( value: number): void {
    this.counter += value;
  }

  decreaseBy(): void {
    this.counter -= 1;
  }

  resetButton(): void{
    this.counter = 10;
  }
}
