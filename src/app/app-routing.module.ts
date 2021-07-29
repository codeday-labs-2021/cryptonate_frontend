import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CardCampaignComponent } from './card-campaign/card-campaign.component';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { CreateCampaign2Component } from './create-campaign2/create-campaign2.component';
import { CreateCampaign3Component } from './create-campaign3/create-campaign3.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonateNowBannerComponent } from './donate-now-banner/donate-now-banner.component';
import { HomeComponent } from './home/home.component';
import { SingleCardComponent } from './single-card/single-card.component';
import { AboutComponent } from './about/about.component';
import { CampaignService } from './campaign.service';
import * as Layout from './_layout';
import {AuthGuard} from "./guards/auth.guard";
import {MyProfileComponent} from "./my-profile/my-profile.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component:  SignupComponent},
  { path: 'Donate', component:  CardCampaignComponent},
  { path: 'Campaign/:_id', component: SingleCardComponent },
  {
    path: 'Fundraise',
    component:  Layout.MainLayoutComponent,
    canActivate: [AuthGuard],
    children:[
      {
          path:'',
          component:CreateCampaignComponent
      } ,
      { path: 'Details', component:  CreateCampaign2Component},
        { path: 'Picture', component:  CreateCampaign3Component}
      ]},
      {
        path: 'Admin',
        component:  Layout.MainLayoutComponent,
        children:[

          ]},
  { path: 'Dashboard', component:  DashboardComponent, canActivate: [AuthGuard]},
  { path: 'Profile', component:  MyProfileComponent, canActivate: [AuthGuard]},
  { path: 'Home', component:  HomeComponent},
  { path: 'Single', component:  SingleCardComponent},
  { path: 'About', component: AboutComponent},
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: '**', redirectTo: 'Home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
