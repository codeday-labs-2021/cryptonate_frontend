import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CampaignService } from '../campaign.service';
import { PageScrollService } from 'ngx-page-scroll-core';
import {DonationService} from "../donation/donation.service";


@Component({
  selector: 'app-my-profile',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public userCampaigns:any[] = [];
  public userDonations:any[] = [];
  firstName = JSON.parse(<string>localStorage.getItem("user"))["user"]["first_name"];

  constructor(private _campaignService: CampaignService, private _donationService: DonationService, private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '.theEnd',});

    this._campaignService.getUserCampaigns()
      .subscribe(data => this.userCampaigns = data);

    this._donationService.getUserDonations()
      .subscribe(data => this.userDonations = data);
  }

}
