import { NgModule } from "@angular/core";
import { InvestmentResultsComponent } from "./components/investment-results/investment-results.component";
import { HeaderComponent } from "./components/header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { UserInput } from "./components/user-input/user-input.module";

@NgModule({
    declarations: [AppComponent, HeaderComponent, InvestmentResultsComponent],
    imports: [BrowserModule, UserInput],
    bootstrap: [AppComponent],
})

export class AppModule {

}