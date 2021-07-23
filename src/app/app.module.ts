import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CardCampaignComponent } from './card-campaign/card-campaign.component';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { CreateCampaign2Component } from './create-campaign2/create-campaign2.component';
import { CreateCampaign3Component } from './create-campaign3/create-campaign3.component';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { DonateNowBannerComponent } from './donate-now-banner/donate-now-banner.component';


import * as Layout from './_layout';
import { CardComponent } from './card/card.component';
import { SingleCardComponent } from './single-card/single-card.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CardCampaignComponent,
    CreateCampaignComponent,
    CreateCampaign2Component,
    CreateCampaign3Component,
    HomeComponent,
    MyProfileComponent,
    NavbarComponent,
    ...Layout.layouts,
    DonateNowBannerComponent,
    CardComponent,
    SingleCardComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
