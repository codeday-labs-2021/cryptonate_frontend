import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService,UserService } from '../../_services';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {
  submitted = false;

  currentUser:any = null;
  campaignUser: FormGroup = new FormGroup({});

  constructor(private formBuilder:FormBuilder,
              private auth: AuthService,
              private userService:UserService,
              private router:Router) {}


  ngOnInit(): void {
    let userData = JSON.parse(<string>localStorage.getItem('user'));
    if(userData){
      this.currentUser = userData["user"];
    }
    else{
      this.router.navigate(["/login"]);
    }

     this.campaignUser = this.formBuilder.group({
      organization: [this.currentUser.organization ? this.currentUser.organization:'', Validators.required],
      occupation:[this.currentUser.occupation ? this.currentUser.occupation:'', Validators.required],
      location: [this.currentUser.location ? this.currentUser.location:'', Validators.required],
      socmed:  [this.currentUser.social_media_url ? this.currentUser.social_media_url:'', Validators.required],
      website: [this.currentUser.website_url ? this.currentUser.website_url:''],
      organizationEmail: [this.currentUser.organization_email ? this.currentUser.organization_email:''],
      about: [this.currentUser.about ? this.currentUser.about:''],
    });
  }

  get f() {
    return this.campaignUser.controls;
  }

  onSubmit(){
    this.submitted=true;

    if(this.campaignUser.invalid){
      return;
    }

    let values = this.campaignUser.value;

    const data = this.userService.createCampaign(
        values.occupation,
        values.organization,
        values.location,
        values.socmed,
        values.website,
        values.organizationEmail,
        values.about,
        this.currentUser._id
    );

    data.subscribe(data =>
      {if(!data['message']) {
      localStorage.setItem("user",JSON.stringify(data));
      this.router.navigate(["/Fundraise/Details"]);
    }
  });


  }
}
