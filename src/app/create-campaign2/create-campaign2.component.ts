import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services';
import { FormGroup, FormControl , FormArray, FormBuilder, Form } from '@angular/forms';
import { CampaignService } from '../campaign.service';
import { Tags } from './Tags';
@Component({
  selector: 'app-create-campaign2',
  templateUrl: './create-campaign2.component.html',
  styleUrls: ['./create-campaign2.component.css']
})


export class CreateCampaign2Component implements OnInit {
  submitted = false;
  selectedTags: string[];
  tags: Tags[]= [
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
    private router: Router) { }

  ngOnInit(): void {
    this.selectedTags = new Array<string>();
    this.campaignDetail = this.formBuilder.group({
      title: new FormControl(),
      date: new FormControl(),
      goal: new FormControl(),
      description: new FormControl()
    });
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

    console.log(values);
    console.log(values.title);

    
    console.log(this.selectedTags);

    const res = {
      title: values.title,
      description: values.description,
      selectedTags: this.selectedTags,
      date: values.date,
      goal: values.goal
    };
      localStorage.setItem("campaigns",JSON.stringify(res));
      this.router.navigate(["/Fundraise/Picture"]);
  }

}
