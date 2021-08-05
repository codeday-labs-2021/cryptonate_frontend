import { Component, OnInit, TemplateRef } from '@angular/core';
import { CampaignService } from 'src/app/_services/campaign.service';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { UserService } from 'src/app/_services';
import { stringify, ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-admin-campaigns',
  templateUrl: './admin-campaigns.component.html',
  styleUrls: ['./admin-campaigns.component.css']
})

export class AdminCampaignsComponent implements OnInit {
  public campaigns:any[] = [];
  _id !: string;
  closeResult : string; 
  author_data = [];
  total_campaigns : number;
  campaign_ind :any;
  campaign_update : FormGroup = new FormGroup({});
  data_campaign;
  data_user;
  constructor(private _campaignService: CampaignService, 
    private modalService: NgbModal,
    private router:Router,
    private formBuilder:FormBuilder,
    private _userService : UserService) {
      this.data_user = this.formBuilder.group({
        occupation : [''],
        organization : [''],
        location : [''],
        website_url : [''],
        organization_email : [''],
        about : [''],
        first_name : [''],
        last_name : [''],
        email : [''],
        socmed : ['']
      });
    }

  ngOnInit(): void {
    this._campaignService.getCampaign()
      .subscribe(campaigns => {
        this.campaigns = campaigns;
        this.total_campaigns = Object.keys(campaigns).length
      });
  }

  open(content, campaign_id : string) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
      this._campaignService.getCampaignById(campaign_id)
        .subscribe(campaign_ind => {
          this.campaign_ind = campaign_ind;
        });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit(){
    let values = this.data_user.value


    this._userService.createCampaign(
      values.occupation,
      values.organization,
      values.location,
      values.socmed,
      values.website_url,
      values.organization_email,
      values.about,
      values._id
    )
    this._userService.updateUser(
      values.first_name,
      values.last_name,
      values.email,
      values.occupation,
      values.organization,
      values.location,
      values.socmed,
      values.website_url,
      values.organization_email,
      values.about,
      values.author_id
    );
    this.modalService.dismissAll(); //dismiss the modal
  }
  
}