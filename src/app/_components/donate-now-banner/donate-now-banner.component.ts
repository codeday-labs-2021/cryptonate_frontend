import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-donate-now-banner',
  templateUrl: './donate-now-banner.component.html',
  styleUrls: ['./donate-now-banner.component.css']
})

export class DonateNowBannerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  FindCampaign(){
    this.router.navigate(["/Donate"]);
  }
}
