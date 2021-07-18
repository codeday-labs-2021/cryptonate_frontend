import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-campaign',
  templateUrl: './card-campaign.component.html',
  styleUrls: ['./card-campaign.component.css']
})
export class CardCampaignComponent implements OnInit {

  campaigns=[{
    title:"CodeDay Fundraiser",
    descr:"",
    imageUrl:"",
    endDate:"",
    fund:0
  },{
    title:"CodeDay Fundraiser",
    descr:"",
    imageUrl:"",
    endDate:"",
    fund:0
  },{
    title:"CodeDay Fundraiser",
    descr:"",
    imageUrl:"",
    endDate:"",
    fund:0
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
