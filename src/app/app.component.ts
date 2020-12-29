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
