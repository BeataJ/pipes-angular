import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string;
  date: string;
  amount: number;
  height: number;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000,
  };

  onHeightChange(value: string): any {
    this.height = parseFloat(value);
  }

  onNameChange(value: string): any {
    this.name = value;
  }

  onDateChange(value: string): any {
    this.date = value;
  }

  onAmountChange(value: string): any {
    this.amount = parseFloat(value);
  }
}
