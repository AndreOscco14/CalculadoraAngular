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

// --------------------------------------------------------
// Calculo de la raiz cuadrada
  // calculateResult(): void {
  //   try {
  //     const consecutiveOperatorsRegex = /[+\-*/]{2,}/;
  
  //     if (consecutiveOperatorsRegex.test(this.result)) {
  //       throw new Error('Invalid operation');
  //     }
  
  //     this.result = eval(this.result);
  //   } catch (error) {
  //     this.result = 'Error';
  //   }
  // }
  // --------------------------------------------------------

  calculateResult(): void {
    try {
      const consecutiveOperatorsRegex = /[+\-*/]{2,}/;
  
      if (consecutiveOperatorsRegex.test(this.result)) {
        throw new Error('Invalid operation');
      }
  
      if (this.result.includes('sqrt')) {
        const number = parseFloat(this.result.replace('sqrt', ''));
        if (isNaN(number)) {
          throw new Error('Invalid operation');
        }
        this.result = Math.sqrt(number).toString();
      } else {
        this.result = eval(this.result);
      }
    } catch (error) {
      this.result = 'Error';
    }
  }
  
  }
