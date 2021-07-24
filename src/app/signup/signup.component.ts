import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidationErrors,
} from "@angular/forms";

import {AuthService} from './../_services';
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
    private AuthSrv:AuthService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname:["",Validators.required],
      lastname:["",Validators.required],
      email:["",
      Validators.required],
      password:["",Validators.required],
    });
  }

  get f(){
    return this.registerForm.controls;
  }

  inValid(){
    this.registerForm.invalid;
  }

  async register(){
    this.submitted = true;
    console.log("register before");
    if(this.registerForm.invalid){
      return;
    }
    console.log("register after");

    let values =this.registerForm.value;

    const res = this.AuthSrv.sginup(values.firstname,
      values.lastname,values.email,values.password);
      
      res.subscribe(res=>{
        console.log("=====================",res);

        
        if (res['result'] == 'successful') {
          localStorage.setItem("user",JSON.stringify(res["data"]));

        }
      })
  }

}
