import { Injectable, signal } from '@angular/core';
import type { enteredData } from '../models/entered-data.model'
import type { annualData } from '../models/annual-data.model'

@Injectable({
  providedIn: 'root'
})

export class InvestmentResultsService {

  resultsData = signal<annualData[] | undefined>(undefined)

  calculateInvestmentResults(data: enteredData) {
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

    this.resultsData.set(annualData);
    
  }


}
