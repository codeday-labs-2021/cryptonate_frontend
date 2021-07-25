import {Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Campaign, CAMPAIGNS} from '../campaigns';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit {
  campaign : Campaign|undefined;
  constructor(private route: ActivatedRoute,) { }

 
    ngOnInit() {
      // First get the product id from the current route.
      const routeParams = this.route.snapshot.paramMap;
      const campaignIdFromRoute = Number(routeParams.get('campaignId'));
    
      // Find the product that correspond with the id provided in route.
      this.campaign = CAMPAIGNS.find(campaign => campaign.id === campaignIdFromRoute);
    }
  

}
