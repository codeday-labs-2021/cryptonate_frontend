import {Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {Campaign} from '../campaigns';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit {
  campaign !: Campaign;
  _id : String ='';
  constructor(private route: ActivatedRoute,private router: Router, private _campaignService:CampaignService) { }
  //public campaigns = [];
  //constructor(private _campaignService:CampaignService){}
 
    ngOnInit() {
      
      // First get the product id from the current route.
      //const routeParams = this.route.snapshot.paramMap;
      const campaignIdFromRoute = String(this.route.snapshot.paramMap.get('_id'));
      this.getCampaignById(campaignIdFromRoute);
      
      // Find the product that correspond with the id provided in route.
     // this.campaign = CAMPAIGNS.find(campaign => campaign.author_id === campaignIdFromRoute);

     //this._campaignService.getCampaign()
     // .subscribe(data => this.campaigns = data);

  }

  getCampaignById(id:string){
    this._campaignService.getCampaignById(id).subscribe({next: data => this.campaign = data});
    console.log(this.campaign.title);
    console.log("im test");
    if(this.campaign!=undefined) console.log(this.campaign._id);
    console.log("im here");
  }
}
  