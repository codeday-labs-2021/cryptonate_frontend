import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService,CampaignService } from '../../_services';

@Component({
  selector: 'app-create-campaign3',
  templateUrl: './create-campaign3.component.html',
  styleUrls: ['./create-campaign3.component.css']
})

export class CreateCampaign3Component implements OnInit {
  campaignInfo;

  title = "";
  date = "";
  selectedTags =  [];
  description = "";
  goal = "";
  pic: FormControl


  constructor(private auth: AuthService,
    private campaignService: CampaignService,
    private router: Router) { }

  ngOnInit(): void {
    this.campaignInfo = JSON.parse(<string>localStorage.getItem("campaigns"));
    this.pic = new FormControl(this.campaignInfo.image_url ? this.campaignInfo.image_url : "");
    if(this.campaignInfo) {
      this.title = this.campaignInfo.title;
      this.date = this.campaignInfo.date;
      this.selectedTags = this.campaignInfo.selectedTags;
      this.description = this.campaignInfo.description;
      this.goal = this.campaignInfo.goal;
    } else {
      this.router.navigate(['/Dashboard']);
    }
  }

  onSubmit()
  {
    const res = {
      title: this.title,
      description: this.description,
      selectedTags: this.selectedTags,
      date: this.date,
      goal: this.goal,
      image_url: this.pic.value
    };

    localStorage.setItem("campaigns",JSON.stringify(res));
    this.router.navigate(["/Fundraise/Review"]);
  }
}


