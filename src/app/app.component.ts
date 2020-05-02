import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgCalculator App';
  num1: number;
  num2: number;
  result: number;
  result_color: string;

  add() {
    this.result = this.num1 + this.num2;
    this.result_color = (this.result <= 0 || isNaN(this.result)) ? 'negative' : 'positive';
  }

  substract() {
    this.result = this.num1 - this.num2;
    this.result_color = (this.result <= 0 || isNaN(this.result)) ? 'negative' : 'positive';
  }

  multiply() {
    this.result = this.num1 * this.num2;
    this.result_color = (this.result <= 0 || isNaN(this.result)) ? 'negative' : 'positive';
  }

  divide() {
    this.result = this.num1 % this.num2;
    this.result_color = (this.result <= 0 || isNaN(this.result)) ? 'negative' : 'positive';
  }
}
