import { Component, Input, OnInit } from '@angular/core';
import { Campaign } from '../../_models/campaigns.model';
import {Observable} from "rxjs";
import {Donation} from "../../_models";
import {DonationService} from "../../_services";

@Component({
  selector: 'app-my-campaign-card',
  templateUrl: './my-campaign-card.component.html',
  styleUrls: ['./my-campaign-card.component.css']
})
export class MyCampaignCardComponent implements OnInit {
  @Input() campaign!: Campaign;
  totalDonationsReceived = 0;
  donations: Observable<Donation[]>;


  constructor(private donationService: DonationService) { }

  ngOnInit(): void {
    this.calculateCurrentDonationAmountOfCampaign();
  }

  async calculateCurrentDonationAmountOfCampaign(){
    this.donations = this.donationService.getCampaignDonations(this.campaign._id);
    await this.donations.forEach(donationList => {
      donationList.forEach(donation => {
        this.totalDonationsReceived += donation["amount_donated"];
      })
    });

  }
}
