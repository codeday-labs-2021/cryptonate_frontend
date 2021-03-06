import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CampaignService} from "../../_services/campaign.service";
import {Campaign} from "../../_models/campaigns.model";
import {DonationService} from "../../_services/donation.service";
import { Donation } from 'src/app/_models';
@Component({
  selector: 'app-make-donation',
  templateUrl: './make-donation.component.html',
  styleUrls: ['./make-donation.component.css']
})
export class MakeDonationComponent implements OnInit {
  makeDonationForm: FormGroup=new FormGroup({});
  submitted = false;
  campaignToDonateTo: Campaign;
  
  //user:any;
  _id : string ='';

  constructor(private formBuilder:FormBuilder,
              private route: ActivatedRoute,
              private _campaignService:CampaignService,
              private _donationService:DonationService,
              private router: Router
              ) {

    const routeParams = this.route.snapshot.paramMap;
    const campaignIdFromRoute = String(routeParams.get('_id'));
    this.getCampaignById(campaignIdFromRoute);
  }

  ngOnInit(): void {
    this.makeDonationForm = this.formBuilder.group({
      amount:["", Validators.required],
      recipientAddress:["",Validators.required],
    });
  }

  get f(){
    return this.makeDonationForm.controls;
  }

  sendCrypto(){
    this.submitted = true;

    if(this.makeDonationForm.invalid){
      return;
    }

    let values = this.makeDonationForm.value;

    const res = this._donationService.postDonation(this.campaignToDonateTo._id, values.amount);

    res.subscribe(res => {
      if (!res['message']) {
        this.router.navigate(["/Dashboard"]);
      }
    })
  }

  getCampaignById(id:string){
    this._campaignService.getCampaignById(id).subscribe(
      data => this.campaignToDonateTo = data);
      
        
      
  }




}