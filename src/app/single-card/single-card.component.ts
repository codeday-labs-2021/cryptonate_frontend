import {Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'
import {Campaign} from '../campaigns';
import { CampaignService } from '../campaign.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit {
  campaign:any;
  _id : string ='';
  constructor(private route: ActivatedRoute,private router: Router, private _campaignService:CampaignService) { }
  //public campaigns = [];
  //constructor(private _campaignService:CampaignService){}
 
    ngOnInit() {
      
      // First get the campaign id from the current route.
      const routeParams = this.route.snapshot.paramMap;
      const campaignIdFromRoute = String(routeParams.get('_id'));
     // console.log(campaignIdFromRoute);
      this.getCampaignById(campaignIdFromRoute);

      //this.route.paramMap.subscribe((params: ParamMap) => 
      //  this._id = params.get('_id'));

      
      // Find the product that correspond with the id provided in route.
     // this.campaign = CAMPAIGNS.find(campaign => campaign.author_id === campaignIdFromRoute);

     //this._campaignService.getCampaign()
     // .subscribe(data => this.campaigns = data);

  }

  getCampaignById(id:string){
    this._campaignService.getCampaignById(id).subscribe(
      data => this.campaign = data);
 
    console.log("im test");
    if(this.campaign!=undefined) console.log(this.campaign._id);
    console.log("im here");
  }
}
  