import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
// import { PageScrollService } from 'ngx-page-scroll-core';
import { DonationService,CampaignService } from '../../_services';

@Component({
  selector: 'app-my-profile',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public userCampaigns:any[] = [];
  public userDonations:any[] = [];
  campaignMoneySum = 0;
  donationMoneySum = 0;
  firstName="";


  constructor(private _campaignService: CampaignService, private _donationService: DonationService, @Inject(DOCUMENT) private document: any) {
    this.firstName = JSON.parse(<string>localStorage.getItem("user"))["user"]["first_name"];
  }

  ngOnInit(): void {
    // this.pageScrollService.scroll({
    //   document: this.document,
    //   scrollTarget: '.theEnd',});

    this._campaignService.getUserCampaigns()
      .subscribe(data => {
        this.userCampaigns = data;
        data.forEach(async campaign => {
          let oneCampaignSum = 0;
          let donations = this._donationService.getCampaignDonations(campaign._id);
          await donations.forEach(donationList => {
            donationList.forEach(donation => {
              oneCampaignSum += donation["amount_donated"];
            });
            this.campaignMoneySum += oneCampaignSum;
          });

        })
      });

    this._donationService.getUserDonations()
      .subscribe(data => {
        this.userDonations = data;
        data.forEach(donation => {
          this.donationMoneySum += donation.amount_donated;
        })
      });


  }

  scroll(targetID:string)
  {
      var target = document.getElementById(targetID);
      target.scrollIntoView();
  }

}
