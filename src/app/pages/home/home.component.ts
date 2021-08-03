import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../../_services/campaign.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public campaigns:any[] = [];
  _id !: string;

  constructor(private _campaignService: CampaignService,
    private router:Router) { }

  ngOnInit(): void {
    //call backend APIs
    // save into campaigns and display campaigns
    this._campaignService.getRecentCampaign()
      .subscribe(data => this.campaigns = data);
  }

}
