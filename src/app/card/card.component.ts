import { Component, Input, OnInit } from '@angular/core';
import { Campaign } from '../campaigns';
import {DonationService} from "../donation/donation.service";
import {Donation} from "../donation/donation";
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
  constructor(private donationService: DonationService) { }

  ngOnInit(): void {
    this.calculateCurrentDonationAmountOfCampaign();
  }

  calculateCurrentDonationAmountOfCampaign() {
    this.donations = this.donationService.getCampaignDonations(this.campaign._id);
    this.donations.forEach(donationList => {
      donationList.forEach(donation => {
        this.totalDonationsReceived += donation["amount_donated"];
      })
    })
  }

}
