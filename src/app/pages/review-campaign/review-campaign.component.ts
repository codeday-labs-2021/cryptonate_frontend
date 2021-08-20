import { getLocaleNumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core'
;import { resetFakeAsyncZone } from '@angular/core/testing';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services';
import { CampaignService } from 'src/app/_services';
import { AuthService } from 'src/app/_services';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-review-campaign',
  templateUrl: './review-campaign.component.html',
  styleUrls: ['./review-campaign.component.css']
})
export class ReviewCampaignComponent implements OnInit {
  campaignInfo;
  currentUser;

  title = "";
  date = "";
  selectedTags =  [];
  description = "";
  goal = "";
  pic = "";

  firstName = "";
  lastName = "";
  email = "";
  occupation = "";
  organization = "";
  location = "";
  socialMediaUrl = "";
  websiteUrl = "";
  organizationEmail = "";
  about = "";

  constructor(private auth: AuthService,
    private campaignService: CampaignService,
    private router: Router) { }

  ngOnInit(): void {
    this.campaignInfo = JSON.parse(<string>localStorage.getItem("campaigns"));
    this.currentUser = JSON.parse(<string>localStorage.getItem("user"))["user"];
    if(!this.currentUser) {
      this.router.navigate(["/login"]);
    } else if(!this.campaignInfo) {
      this.router.navigate(['/Dashboard']);
    }

    this.title = this.campaignInfo.title;
    this.date = this.campaignInfo.date;
    this.selectedTags = this.campaignInfo.selectedTags;
    this.description = this.campaignInfo.description;
    this.goal = this.campaignInfo.goal;
    this.pic = this.campaignInfo.image_url;

    this.firstName = this.currentUser.first_name;
    this.lastName = this.currentUser.last_name;
    this.about = this.currentUser.about;
    this.email = this.currentUser.email;
    this.occupation = this.currentUser.occupation;
    this.organizationEmail = this.currentUser.organization_email;
    this.socialMediaUrl = this.currentUser.social_media_url;
    this.websiteUrl = this.currentUser.website_url;
    this.location = this.currentUser.location;
    this.organization = this.currentUser.organization;

  }

  onSubmit()
  {
    // const res = this.campaignService.createCampaign(
    //   this.title,
    //   this.description,
    //   this.selectedTags,
    //   new Date(this.date),
    //   parseFloat(this.goal),
    //   this.pic,
    // );
    // res.subscribe(res =>
    //   {
    //     if(!res['message']) {
    //       localStorage.removeItem("campaigns");
    //       this.router.navigate(["/Dashboard"]);
    //     }
    //   });

      let formData = new FormData();
      formData.append("title",this.title);
      formData.append("description", this.description);
      formData.append("tags", JSON.stringify(this.selectedTags));
      formData.append("date_end", JSON.stringify(new Date(this.date)));
      formData.append("goal", JSON.stringify(parseFloat(this.goal)));
      formData.append("image_url", this.pic);

      const res = this.campaignService.createCampaign(formData);
      res.subscribe(res =>
          {
            if(!res['message']) {
              localStorage.removeItem("campaigns");
              this.router.navigate(["/Dashboard"]);
            }
            else{console.log("error found");}
          });
      
      
  }

}
