import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { UserService } from '../../_services';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

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
  address="";

  readonly = true;
  submitted = false;
  profileForm: FormGroup=new FormGroup({});
  currentUser:any = null;

  constructor(
    private formBuilder : FormBuilder,
    private UserSrv: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let userData = JSON.parse(<string>localStorage.getItem('user'));
    if(userData){
      this.currentUser = userData["user"];
      this.firstName = this.currentUser.first_name;
      this.lastName = this.currentUser.last_name;
      this.about = this.currentUser.about;
      this.email = this.currentUser.email;
      this.address =this.currentUser.wallet_address;
      this.occupation = this.currentUser.occupation;
      this.organizationEmail = this.currentUser.organization_email;
      this.socialMediaUrl = this.currentUser.social_media_url;
      this.websiteUrl = this.currentUser.website_url;
      this.location = this.currentUser.location;
      this.organization = this.currentUser.organization;
    }

    this.profileForm = this.formBuilder.group({
      profileEmail:[this.email, Validators.required],
      profileAddress:[this.address, Validators.required],
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
      values.profileAddress,
      values.profileOccupation,
      values.profileOrganization,
      values.profileLocation,
      values.profileSocialMedia,
      values.profileWebsite,
      values.profileOrganizationEmail,
      values.profileAbout,
      this.currentUser._id
    );

    res.subscribe(res => {
      if (!res['message']) {
        localStorage.setItem("user",JSON.stringify(res));
        this.toggleReadOnly();
      }
    });
  }

}
