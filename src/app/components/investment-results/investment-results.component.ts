import { Component, inject, Input } from '@angular/core';
import { annualData } from '../../models/annual-data.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentResultsService } from '../../services/investment-results.service';


@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  investmentResultsService = inject(InvestmentResultsService)

  get results() {
    return this.investmentResultsService.resultsData
  }
  
}
