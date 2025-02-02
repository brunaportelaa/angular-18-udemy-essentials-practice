import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialValue = '0';
  enteredAnnualValue = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';
  

  onSubmit(){
    console.log('Submitted!')
    console.log(this.enteredInitialValue)
    console.log(this.enteredAnnualValue)
    console.log(this.enteredExpectedReturn)
    console.log(this.enteredDuration)
  }
}
