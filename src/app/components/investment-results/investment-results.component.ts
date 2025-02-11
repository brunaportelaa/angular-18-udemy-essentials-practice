import { Component, inject, Input } from '@angular/core';
import { InvestmentResultsService } from '../../services/investment-results.service';


@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  investmentResultsService = inject(InvestmentResultsService)

  get results() {
    return this.investmentResultsService.resultsData
  }
  
}
