import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HttpClient, HttpInterceptor, HTTP_INTERCEPTORS} from "@angular/common/http";
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
import * as Service from './_services';
import { CardComponent } from './card/card.component';
import { SingleCardComponent } from './single-card/single-card.component';
import { AboutComponent } from './about/about.component';
import {AuthGuard} from "./guards/auth.guard";
import {AddHeaderInterceptor} from "./interceptors/interceptor";
import { CampaignService } from './campaign.service';
import { DonationCardComponent } from './donation-card/donation-card.component';
import {DonationService} from "./donation/donation.service";

@NgModule({
  declarations: [
    DonationCardComponent,
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
    DonationCardComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    HttpClientModule
  ],
  providers: [
    Service.AuthService,
    CampaignService,
    DonationService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddHeaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
