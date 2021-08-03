import {Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Router, ActivatedRoute, ParamMap} from '@angular/router'
import {Campaign} from '../../_models/campaigns.model';
import { UserService, CampaignService} from "../../_services";
import { DatePipe } from '@angular/common';
import { DonationService } from 'src/app/_services/donation.service';
import { Donation } from 'src/app/_models';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit {
  campaign: Campaign;
  user:string='';
  donations: Observable<Donation[]>;
  totalDonationsReceived = 0;
  progress = 0;
  daysLeft = 0;
  //user:any;
  _id : string ='';
  constructor(private route: ActivatedRoute,
    private router: Router,
     private _campaignService:CampaignService,
     private _donationService: DonationService,
     private _userService:UserService) {

    // First get the campaign id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const campaignIdFromRoute = String(routeParams.get('_id'));

    // console.log(campaignIdFromRoute);
    this.getCampaignById(campaignIdFromRoute);
  }


  //public campaigns = [];
  //constructor(private _campaignService:CampaignService){}

    ngOnInit() {

      // First get the campaign id from the current route.
      const routeParams = this.route.snapshot.paramMap;
      const campaignIdFromRoute = String(routeParams.get('_id'));

     // console.log(campaignIdFromRoute);
      this.getCampaignById(campaignIdFromRoute);

     // this.getUserById(this.userId);


      //this.route.paramMap.subscribe((params: ParamMap) =>
      //  this._id = params.get('_id'));


      // Find the product that correspond with the id provided in route.
     // this.campaign = CAMPAIGNS.find(campaign => campaign.author_id === campaignIdFromRoute);

     //this._campaignService.getCampaign()
     // .subscribe(data => this.campaigns = data);

  }

  // getUserById(id:string){
  //   this._userService.getUserById(id).subscribe(
  //     data => this.user=data
  //   );
  // }


  getCampaignById(id:string){
    this._campaignService.getCampaignById(id).subscribe(
      data => this.getCampaignInfo(data));
  }

  async getCampaignInfo(campaign: Campaign|undefined) {
    this.campaign = campaign;
    this.user = campaign.author_id;
    this.daysLeft = Math.ceil(Math.abs(Date.now() - new Date(campaign.date_end).getTime())/(1000*3600*24));
    if(this.daysLeft < 0) this.daysLeft = 0;
    await this.calculateCurrentDonationAmountOfCampaign()
  }


  async calculateCurrentDonationAmountOfCampaign(){
    console.log(this.campaign);
    this.donations = await this._donationService.getCampaignDonations(this.campaign._id);
    await this.donations.forEach(donationList => {
      donationList.forEach(donation => {
        this.totalDonationsReceived += donation["amount_donated"];
      })
    });

    this.progress = this.totalDonationsReceived/this.campaign.goal;
  }

  currentPercentage() {
    if(this.progress > 100) this.progress = 100;
    return `width: ${this.progress}%`
  }
}
