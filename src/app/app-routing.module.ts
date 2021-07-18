import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CardCampaignComponent } from './card-campaign/card-campaign.component';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { CreateCampaign2Component } from './create-campaign2/create-campaign2.component';
import { CreateCampaign3Component } from './create-campaign3/create-campaign3.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { DonateNowBannerComponent } from './donate-now-banner/donate-now-banner.component';
import * as Layout from './_layout';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component:  SignupComponent},
  { path: 'Donate', component:  CardCampaignComponent},
  { 
    path: 'Fundraise', 
    component:  Layout.MainLayoutComponent,
    children:[
      {
          path:'',
          component:CreateCampaignComponent
      } ,
      { path: 'Details', component:  CreateCampaign2Component},
        { path: 'Picture', component:  CreateCampaign3Component}
      ]},
  { path: 'Profile', component:  MyProfileComponent},
  { path: 'Home', component:  DonateNowBannerComponent},
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: '**', redirectTo: 'Home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
