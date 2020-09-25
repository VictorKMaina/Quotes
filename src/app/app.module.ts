import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighestVoteDirective } from './directives/highest-vote.directive';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { QuoteComponent } from './components/quote/quote.component';
import { QuoteDetailsComponent } from './components/quote-details/quote-details.component';
import { TimePassedPipe } from './pipes/time-passed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HighestVoteDirective,
    QuoteFormComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    TimePassedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
