import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result: string = '0';

  handleButtonClick(value: number | string): void {
    value = value.toString();

    if (this.result === '0') {
      this.result = value;
    } else {
      this.result += value;
    }
  }

  resetResult(): void {
    this.result = '0';
  }

  calculateResult(): void {
    try {
      this.result = eval(this.result);
    } catch (error) {
      this.result = 'Error';
    }
  }
  }
