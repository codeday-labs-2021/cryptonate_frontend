import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Campaign } from '../../_models/campaigns.model';
import { CampaignService } from '../../_services/campaign.service';
import { Tags } from '../../_models/tags.model';
import { filter, first } from 'rxjs/operators';


@Component({
  selector: 'app-card-campaign',
  templateUrl: './card-campaign.component.html',
  styleUrls: ['./card-campaign.component.css']
})
export class CardCampaignComponent implements OnInit {
public campaigns:any[] = [];
_id !: string;
tempCampaign:any;
public filteredCampaigns: any[] = [];
selectedTags: string[];
  tags: Tags[]= [
    {name: "Food", value: "food" },
    {name: "Education", value: "education"},
    {name:"Health", value:"health"}
  ];
  newArray=[];
//campaigns = CAMPAIGNS;
  constructor(private _campaignService: CampaignService,
    private router:Router) { }

  ngOnInit(): void {
    //call backend APIs 
    // save into campaigns and display campaigns 
    this.selectedTags = new Array<string>();
    this.filteredCampaigns = new Array<Campaign>();
    this.getCampaign();

    
  }
CampaignArray: any=[];
getCampaign(){
  this._campaignService.getCampaign()
  .subscribe(campaigns => this.campaigns = campaigns);
  
   this._campaignService.getCampaign()
   .subscribe(campaigns => this.filteredCampaigns = campaigns);
}


  onCheckChange(event, value)
  {
     if(event.target.checked){
      console.log(value+ ' Checked');
      this.selectedTags.push(value);
      this.CampaignArray = this.campaigns.filter((e:any) => e.tags.includes(value));
      console.log(this.CampaignArray);
      //e.tags.filter((res:any) === value));
      this.filteredCampaigns=[];
      this.newArray.push(this.CampaignArray);
      for(let i=0;i<this.newArray.length;i++){
        var firstArray = this.newArray[i];
        for(let j=0;j<firstArray.length;j++){
          var camp = firstArray[j];
          this.filteredCampaigns.push(camp);
        }
      }
      
    }
    else{
      console.log(value+ 'unchecked');
      this.selectedTags = this.selectedTags.filter(m=>m!=value);
      this.CampaignArray = this.filteredCampaigns.filter((e:any)=> !e.tags.includes(value));
      console.log(this.CampaignArray);
      this.newArray=[];
      this.filteredCampaigns=[];
      this.newArray.push(this.CampaignArray);
      for(let i=0;i<this.newArray.length;i++){
        var firstArray = this.newArray[i];
        for(let j=0;j<firstArray.length;j++){
          var camp = firstArray[j];
          this.filteredCampaigns.push(camp);
        }
      }
  }
   if(this.selectedTags.length==0)
    {
      console.log('im here');
        this.filteredCampaigns=this.campaigns;
    }

  
  }
}