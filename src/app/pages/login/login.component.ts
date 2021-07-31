import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidationErrors,
} from "@angular/forms";
import {AuthService} from "../../_services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup=new FormGroup({});
  submitted = false;

  constructor(
    private formBuilder:FormBuilder,
    private AuthSrv:AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:["", Validators.required],
      password:["",Validators.required],
    });
  }

  get f(){
    return this.loginForm.controls;
  }

  submit(): void {
    this.submitted = true;

    if(this.loginForm.invalid){
      //TODO: show error for invalid login or signup on frontend
      return;
    }

    let values =this.loginForm.value;

    const res = this.AuthSrv.login(values.email,values.password);

    res.subscribe(res => {
      if (res['message'] != "Authentication failed") {
        localStorage.setItem("user",JSON.stringify(res));

        this.router.navigate(["/Dashboard"]);
      }
    })
  }

}