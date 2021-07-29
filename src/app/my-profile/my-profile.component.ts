import { Component, OnInit } from '@angular/core';
import {UserService} from "../user/user.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  firstName = JSON.parse(<string>localStorage.getItem("user"))["user"]["first_name"];
  lastName = JSON.parse(<string>localStorage.getItem("user"))["user"]["last_name"];
  email = JSON.parse(<string>localStorage.getItem("user"))["user"]["email"];

  occupation = JSON.parse(<string>localStorage.getItem("user"))["user"]["occupation"];
  organization = JSON.parse(<string>localStorage.getItem("user"))["user"]["organization"];
  location = JSON.parse(<string>localStorage.getItem("user"))["user"]["location"];
  socialMediaUrl = JSON.parse(<string>localStorage.getItem("user"))["user"]["social_media_url"];
  websiteUrl = JSON.parse(<string>localStorage.getItem("user"))["user"]["website_url"];
  organizationEmail = JSON.parse(<string>localStorage.getItem("user"))["user"]["organization_email"];
  about = JSON.parse(<string>localStorage.getItem("user"))["user"]["about"];

  readonly = true;
  submitted = false;
  profileForm: FormGroup=new FormGroup({});

  constructor(
    private formBuilder : FormBuilder,
    private UserSrv: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      profileEmail:[this.email, Validators.required],
      profileFirstName:[this.firstName, Validators.required],
      profileLastName:[this.lastName, Validators.required],

      profileOccupation: new FormControl(this.occupation),
      profileOrganization: new FormControl(this.organization),
      profileLocation: new FormControl(this.location),
      profileSocialMedia: new FormControl(this.socialMediaUrl),
      profileWebsite: new FormControl(this.websiteUrl),
      profileOrganizationEmail: new FormControl(this.organizationEmail),
      profileAbout: new FormControl(this.about)
    });
  }

  get f(){
    return this.profileForm.controls;
  }

  toggleReadOnly() {
    this.readonly = !this.readonly;
  }

  save() {
    this.submitted = true;
    if(this.profileForm.invalid) {
      return;
    }

    let values =this.profileForm.value;

    console.log(values);

    const res = this.UserSrv.updateUser(
      values.profileFirstName,
      values.profileLastName,
      values.profileEmail,
      values.profileOccupation,
      values.profileOrganization,
      values.profileLocation,
      values.profileSocialMedia,
      values.profileWebsite,
      values.profileOrganizationEmail,
      values.profileAbout
    );

    res.subscribe(res => {
      if (!res['message']) {
        localStorage.setItem("user",JSON.stringify(res));
        this.toggleReadOnly();
      }
    });
  }

}
