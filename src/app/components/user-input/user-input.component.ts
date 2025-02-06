import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { enteredData } from '../../models/entered-data.model';
import { InvestmentResultsService } from '../../services/investment-results.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  constructor(private investmentResultsService: InvestmentResultsService) {}

  @Output() calculate = new EventEmitter<enteredData>();

  enteredInitialValue = signal('0');
  enteredAnnualValue = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');
  

  onSubmit(){
    this.investmentResultsService.calculateInvestmentResults({
      initialValue: +this.enteredInitialValue(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualValue(),
    })
  }
}
