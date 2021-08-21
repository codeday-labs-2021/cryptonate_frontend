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
  //pic: FormControl
  url="";
  campaignImage:string=null;


  constructor(private auth: AuthService,
    private campaignService: CampaignService,
    private router: Router) {
    this.campaignInfo = JSON.parse(<string>localStorage.getItem("campaigns"));
  }

  ngOnInit(): void {
   // this.pic = new FormControl(this.campaignInfo.image_url ? this.campaignInfo.image_url : "");
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
  onSelect(e)
  {
    if(e.target.files){
      //this.campaignImage = e.target.files[0];
      //this.campaignImage = e.target.files[0];
      var reader:FileReader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
       this.campaignImage ==event.target.result;
      }
    }
  }

  upload(){
    let formData = new FormData();
    formData.append('file', this.campaignImage);
    const res = this.campaignService.uploadImage(formData);
    res.subscribe(res =>
        {
          console.log("=====",res);
          if(!res['message']) {
            // localStorage.removeItem("campaigns");
            // this.router.navigate(["/Dashboard"]);
          }
          else{console.log("error found");}
        },error=>{
          console.error("=====",error);
        });
  }
  onSubmit()
  {
    const res = {
      title: this.title,
      description: this.description,
      selectedTags: this.selectedTags,
      date: this.date,
      goal: this.goal,
      image_url: this.url
    };

    let info = JSON.stringify(res);
    localStorage.setItem("campaigns",JSON.stringify(res));
    localStorage.setItem("image_url",this.url);
    localStorage.setItem("campaignImage",this.campaignImage);
    this.router.navigate(["/Fundraise/Review"]);

    // this.router.navigate(['./index'], {
    //   queryParams: {
    //     role: this.role
    //   }
    // });
  }
}


