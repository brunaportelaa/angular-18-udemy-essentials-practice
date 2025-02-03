import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { enteredData } from '../../models/entered-data.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output() calculate = new EventEmitter<enteredData>();

  enteredInitialValue = '0';
  enteredAnnualValue = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';
  

  onSubmit(){
    this.calculate.emit({
      initialValue: +this.enteredInitialValue,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualValue,
    })
  }
}
