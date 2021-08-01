import { getLocaleNumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core'
;import { resetFakeAsyncZone } from '@angular/core/testing';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services';
import { CampaignService } from 'src/app/_services';
import { AuthService } from 'src/app/_services';

@Component({
  selector: 'app-review-campaign',
  templateUrl: './review-campaign.component.html',
  styleUrls: ['./review-campaign.component.css']
})
export class ReviewCampaignComponent implements OnInit {
  title = JSON.parse(<string>localStorage.getItem("campaigns"))["title"];
  date = JSON.parse(<string>localStorage.getItem("campaigns"))["date"];
  selectedTags =  JSON.parse(<string>localStorage.getItem("campaigns"))["selectedTags"];
  description = JSON.parse(<string>localStorage.getItem("campaigns"))["description"];
  goal = JSON.parse(<string>localStorage.getItem("campaigns"))["goal"];
  pic = JSON.parse(<string>localStorage.getItem("image_url"));

  firstName = JSON.parse(<string>localStorage.getItem("user"))["user"]["first_name"];
  lastName = JSON.parse(<string>localStorage.getItem("user"))["user"]["last_name"];
  occupation = JSON.parse(<string>localStorage.getItem("user"))["user"]["occupation"];
  organization = JSON.parse(<string>localStorage.getItem("user"))["user"]["organization"];
  location = JSON.parse(<string>localStorage.getItem("user"))["user"]["location"];
  socialMediaUrl = JSON.parse(<string>localStorage.getItem("user"))["user"]["social_media_url"];
  websiteUrl = JSON.parse(<string>localStorage.getItem("user"))["user"]["website_url"];
  organizationEmail = JSON.parse(<string>localStorage.getItem("user"))["user"]["organization_email"];
  about = JSON.parse(<string>localStorage.getItem("user"))["user"]["about"];

  
  constructor(private auth: AuthService,
    private campaignService: CampaignService,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.date);
  }

  onSubmit()
  {
    const res = this.campaignService.createCampaign(
      this.title,
      this.description,
      this.selectedTags,
      this.date,
      this.goal,
      this.pic,
    );
    res.subscribe(res =>
      {if(!res['message']) {
      this.router.navigate(["/Dashboard"]);
    }
  });
  }

}
