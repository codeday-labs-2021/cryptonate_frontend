import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidationErrors,
} from "@angular/forms";

import {AuthService} from '../../_services';
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup=new FormGroup({});
  submitted = false;
  constructor(
    private formBuilder:FormBuilder,
    private AuthSrv:AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname:["",Validators.required],
      lastname:["",Validators.required],
      email:["", Validators.required],
      password:["",Validators.required],
    });
  }

  get f(){
    return this.registerForm.controls;
  }

  async register(){
    this.submitted = true;

    if(this.registerForm.invalid){
      return;
    }

    let values =this.registerForm.value;

    const res = this.AuthSrv.signup(values.firstname,
      values.lastname,values.email,values.password);

      res.subscribe(res => {
        if (!res['message']) { //if there is no error message
          this.router.navigate(["/login"]);
        }
      }, err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 409) { //email already exists
            this.registerForm.setErrors({
              serverError: err,
            })
          }
        }
      })
  }

}
