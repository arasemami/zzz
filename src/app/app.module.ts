import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuItemsComponent } from './components/header/menu-items/menu-items.component';
import { UnderHeaderComponent } from './components/under-header/under-header.component';
import { UnderMenuSearchBarComponent } from './components/under-header/under-menu-search-bar/under-menu-search-bar.component';
import { TrendingComponent } from './components/trending/trending.component';
import { HowIsWorkingComponent } from './components/how-is-working/how-is-working.component';
import { HighestRatedComponent } from './components/highest-rated/highest-rated.component';
import { HighestRatedPersonComponent } from './components/highest-rated/highest-rated-person/highest-rated-person.component';
import { WorkFlowComponent } from './components/work-flow/work-flow.component';
import { WhatYouNeedComponent } from './components/what-you-need/what-you-need.component';
import { CustomersRecommendComponent } from './components/customers-recommend/customers-recommend.component';
import { FooterComponent } from './components/footer/footer.component';
import { TrustedByComponent } from './components/trusted-by/trusted-by.component';
import { FreelanceTalentComponent } from './components/freelance-talent/freelance-talent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuItemsComponent,
    UnderHeaderComponent,
    UnderMenuSearchBarComponent,
    TrendingComponent,
    HowIsWorkingComponent,
    HighestRatedComponent,
    HighestRatedPersonComponent,
    WorkFlowComponent,
    WhatYouNeedComponent,
    CustomersRecommendComponent,
    FooterComponent,
    TrustedByComponent,
    FreelanceTalentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
