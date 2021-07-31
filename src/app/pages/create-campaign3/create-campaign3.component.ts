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

  // improve
  title = JSON.parse(<string>localStorage.getItem("campaigns"))["title"];
  date = JSON.parse(<string>localStorage.getItem("campaigns"))["date"];
  selectedTags =  JSON.parse(<string>localStorage.getItem("campaigns"))["selectedTags"];
  description = JSON.parse(<string>localStorage.getItem("campaigns"))["description"];
  goal = JSON.parse(<string>localStorage.getItem("campaigns"))["goal"];
  pic: FormControl;


  constructor(private auth: AuthService,
    private campaignService: CampaignService,
    private router: Router) { }

  ngOnInit(): void {
    this.pic = new FormControl();
    console.log(this.title);
  }

  onSubmit()
  {
    const res = this.campaignService.createCampaign(
      this.title,
      this.description,
      this.selectedTags,
      this.date,
      this.goal,
      this.pic.value
    );

    res.subscribe(data =>
      {if(!res['message']) {
      localStorage.setItem("user",JSON.stringify(res));
      this.router.navigate(["/Fundraise/Donate"]);
    }
  });
  }
}


