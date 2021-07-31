import { Component, OnInit } from '@angular/core';
import { CampaignService } from 'src/app/_services/campaign.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-campaigns',
  templateUrl: './admin-campaigns.component.html',
  styleUrls: ['./admin-campaigns.component.css']
})

export class AdminCampaignsComponent implements OnInit {
  public campaigns:any[] = [];
  _id !: string;
  //campaigns = CAMPAIGNS;
    constructor(private _campaignService: CampaignService,
      private router:Router) { }
  
    ngOnInit(): void {
      //call backend APIs 
      // save into campaigns and display campaigns 
      this._campaignService.getCampaign()
        .subscribe(campaigns => this.campaigns = campaigns);
    }
  }
  