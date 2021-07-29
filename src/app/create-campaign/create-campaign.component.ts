import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services';
import { FormGroup, FormControl ,FormBuilder } from '@angular/forms';
import { UserService} from "../user/user.service";

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {


  submitted = false;

  occupation = JSON.parse(<string>localStorage.getItem("user"))["user"]["occupation"];
  organization = JSON.parse(<string>localStorage.getItem("user"))["user"]["organization"];
  location = JSON.parse(<string>localStorage.getItem("user"))["user"]["location"];
  socialMediaUrl = JSON.parse(<string>localStorage.getItem("user"))["user"]["social_media_url"];
  websiteUrl = JSON.parse(<string>localStorage.getItem("user"))["user"]["website_url"];
  organizationEmail = JSON.parse(<string>localStorage.getItem("user"))["user"]["organization_email"];
  about = JSON.parse(<string>localStorage.getItem("user"))["user"]["about"];

  campaignUser: FormGroup = new FormGroup({});

  constructor(private formBuilder:FormBuilder,
    private auth: AuthService,
    private userService:UserService,
     private rout:Router) { }

  ngOnInit(): void {
     this.campaignUser = this.formBuilder.group({
      name: new FormControl(this.organization),
      occupation: new FormControl(this.occupation),
      location: new FormControl(this.location),
      socmed: new FormControl(this.socialMediaUrl),
      website: new FormControl(this.websiteUrl),
      organizationEmail: new FormControl(this.organizationEmail),
      about: new FormControl(this.about),
    });
  }

  onSubmit(){
    this.submitted=true;
    console.log(this.campaignUser.get('socmed').value);
    let values = this.campaignUser.value;
    console.log(values);

    const data = this.userService.createCampaign(
        values.occupation,
        values.name,
        values.location,
        values.socmed,
        values.website,
        values.organizationEmail,
        values.about
    );

    data.subscribe(data =>
      {if(!data['message']) {
      localStorage.setItem("user",JSON.stringify(data));
      this.rout.navigate(["/Fundraise/Details"]);
    }
  });


  }

}
