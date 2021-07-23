import { Component, OnInit, Input } from '@angular/core';
import { CAMPAIGNS } from '../campaigns';

@Component({
  selector: 'app-card-campaign',
  templateUrl: './card-campaign.component.html',
  styleUrls: ['./card-campaign.component.css']
})
export class CardCampaignComponent implements OnInit {
campaigns = CAMPAIGNS;
  constructor() { }

  ngOnInit(): void {
  }

}
