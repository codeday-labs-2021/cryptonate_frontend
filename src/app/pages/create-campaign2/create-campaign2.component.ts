import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService,CampaignService } from '../../_services';
import {FormGroup, FormControl, FormArray, FormBuilder, Form, Validators} from '@angular/forms';
import { Tags } from '../../_models/tags.model';
@Component({
  selector: 'app-create-campaign2',
  templateUrl: './create-campaign2.component.html',
  styleUrls: ['./create-campaign2.component.css']
})


export class CreateCampaign2Component implements OnInit {
  campaignInfo;
  title = "";
  date = "";
  goal = 0;
  description = "";

  image_url = "";

  submitted = false;
  selectedTags: string[];
  tags: Tags[] = [
    {name: "Food", value: "food" },
    {name: "Education", value: "education"},
    {name:"Health", value:"health"}
  ];

  /*
  tagsOption:FormArray= new FormArray([
    new FormControl({name: "Food", value: "food" }),
    new FormControl({name: "Education", value: "education"}),
    new FormControl({name:"Health", value:"health"})
  ]);
*/

  campaignDetail : FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
    private auth: AuthService,
    private campaignService: CampaignService,
    private router: Router) {
    this.campaignInfo = JSON.parse(<string>localStorage.getItem("campaigns"));
  }

  ngOnInit(): void {
    this.selectedTags = new Array<string>();
    
    if(this.campaignInfo) {
      this.title = this.campaignInfo.title;
      this.date = this.campaignInfo.date;
      this.goal = parseFloat(this.campaignInfo.goal);
      this.description = this.campaignInfo.description;
      this.image_url = this.campaignInfo.image_url;
    }

    this.campaignDetail = this.formBuilder.group({
      title: [this.title, Validators.required],
      date: [this.date, Validators.required],
      goal: [this.goal, Validators.required],
      description: [this.description, Validators.required]
    });
  }

  get f() {
    return this.campaignDetail.controls;
  }

  onCheckChange(event, value)
  {
    if(event.target.checked){
      console.log(value+ ' Checked');
      this.selectedTags.push(value);
    }
    else{
      console.log(value+ 'unchecked');
      this.selectedTags = this.selectedTags.filter(m=>m!=value);
    }
  }

  onSubmit(){
    this.submitted=true;
    let values = this.campaignDetail.value;


    try{
      let goal = parseFloat(this.campaignDetail.value.goal);
    } catch (e) {
      this.campaignDetail.value.goal.setErrors({
        "type-error": e
      });
    }

    if(this.campaignDetail.invalid){
      return;
    }

    const res = {
      title: values.title,
      description: values.description,
      selectedTags: this.selectedTags,
      date: values.date,
      goal: values.goal,
      image_url: this.image_url
    };
      localStorage.setItem("campaigns",JSON.stringify(res));
      this.router.navigate(["/Fundraise/Picture"]);
  }

}
