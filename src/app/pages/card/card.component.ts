import { Component, Input, OnInit } from '@angular/core';
import { Campaign } from '../../_models/campaigns.model';
import {DonationService} from "../../_services/donation.service";
import {Donation} from "../../_models/donation.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() campaign!: Campaign;
  donations: Observable<Donation[]>;
  totalDonationsReceived = 0;
  progress = 0;
  defualtImg ="./assets/images/donation.png";
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

    this.progress = this.totalDonationsReceived/this.campaign.goal;
  }

  
  
  currentPercentage() {
    if(this.progress > 100) this.progress = 100;
    return `width: ${this.progress}%`
  }

}
