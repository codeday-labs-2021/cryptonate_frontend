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
  constructor(private _campaignService: CampaignService,
    private router:Router) { }
  
  author_data = [];
  total_campaigns : number;

  ngOnInit(): void {
    //call backend APIs 
    // save into campaigns and display campaigns 

    this._campaignService.getCampaign()
      .subscribe(campaigns => {
        this.campaigns = campaigns;
        this.total_campaigns = Object.keys(campaigns).length
      });
  }
}