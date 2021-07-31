import { Component, Input, OnInit } from '@angular/core';
import { Campaign } from '../../_models/campaigns.model';

@Component({
  selector: 'app-my-campaign-card',
  templateUrl: './my-campaign-card.component.html',
  styleUrls: ['./my-campaign-card.component.css']
})
export class MyCampaignCardComponent implements OnInit {
  @Input() campaign!: Campaign;
  constructor() { }

  ngOnInit(): void {
  }

}
