import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as Layout from './_layout';
import {AuthGuard} from "./guards/auth.guard";
import * as Pages from './pages';
import * as AdminContainer from './admin';

const routes: Routes = [
  { path: 'login', component: Pages.LoginComponent },
  { path: 'signup', component:  Pages.SignupComponent},
  { path: 'Donate', component:  Pages.CardCampaignComponent},
  { path: 'Campaign/:_id', component: Pages.SingleCardComponent },
  {
    path: 'Fundraise',
    component:  Layout.MainLayoutComponent,
    canActivate: [AuthGuard],
    children:[
      {
          path:'',
          component:Pages.CreateCampaignComponent
      } ,
      { path: 'Details', component:  Pages.CreateCampaign2Component},
        { path: 'Picture', component:  Pages.CreateCampaign3Component},
        { path: 'Review', component:  Pages.ReviewCampaignComponent}
      ]},
      {
        path: 'Admin',
        component:  Layout.AdminLayoutComponent,
        children:[
          { path: '', component:  AdminContainer.AdminDashboardComponent},
          { path: 'Dashboard', component:  AdminContainer.AdminDashboardComponent},
          { path: 'Campaigns', component:  AdminContainer.AdminCampaignsComponent},
          { path: 'Users', component: AdminContainer.AdminUsersComponent}
          ]},
  { path: 'Dashboard', component:  Pages.DashboardComponent, canActivate: [AuthGuard]},
  { path: 'Profile', component:  Pages.MyProfileComponent, canActivate: [AuthGuard]},
  { path: 'MakeDonation/:_id', component: Pages.MakeDonationComponent, canActivate: [AuthGuard]},
  { path: 'Home', component:  Pages.HomeComponent},
  { path: 'Single', component:  Pages.SingleCardComponent},
  { path: 'About', component: Pages.AboutComponent},
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: '**', redirectTo: 'Home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
