import { Component, Input } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserInputComponent } from "./components/user-input/user-input.component";
import type { enteredData } from './models/entered-data.model';
import { annualData } from './models/annual-data';
import { InvestmentResultsComponent } from "./components/investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
})

export class AppComponent {

  resultsData?: annualData[];

  onCalculateInvestmentResults(data: enteredData) {

    const { initialValue, duration, expectedReturn, annualInvestment} = data
    const annualData = [];
    let investmentValue = initialValue;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialValue;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialValue + annualInvestment * year,
      });
    }

    this.resultsData = annualData;
    
  }
  

}
