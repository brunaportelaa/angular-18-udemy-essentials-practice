import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  // @Output() calculate = new EventEmitter<{
  //   enteredInitialValue: number;
  //   enteredAnnualValue: number;
  //   enteredExpectedReturn: number;
  //   enteredDuration: number;
  // }>();

  enteredInitialValue = '0';
  enteredAnnualValue = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';
  

  onSubmit(){
    // this.calculate.emit()
  }
}
