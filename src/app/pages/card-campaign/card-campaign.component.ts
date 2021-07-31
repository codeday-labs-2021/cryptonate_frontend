import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Campaign } from '../../_models/campaigns.model';
import { CampaignService } from '../../_services/campaign.service';

@Component({
  selector: 'app-card-campaign',
  templateUrl: './card-campaign.component.html',
  styleUrls: ['./card-campaign.component.css']
})
export class CardCampaignComponent implements OnInit {
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