import { Component, OnInit, EventEmitter} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidationErrors,
} from "@angular/forms";
import {AuthService} from "../../_services";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup=new FormGroup({});
  submitted = false;
  return: string = "";

  constructor(
    private formBuilder:FormBuilder,
    private AuthSrv:AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:["", Validators.required],
      password:["",Validators.required],
    });
    this.route.queryParams
      .subscribe(params => this.return = params['return'] || '/Dashboard');
  }

  get f(){
    return this.loginForm.controls;
  }

  submit(): void {
    this.submitted = true;

    if(this.loginForm.invalid){
      return;
    }

    let values =this.loginForm.value;

    const res = this.AuthSrv.login(values.email,values.password);

    res.subscribe(res => {
      if (res['message'] != "Authentication failed") {
        localStorage.setItem("user",JSON.stringify(res));
        this.router.navigateByUrl(this.return);
      }
    }, err => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) { //unauthorized
          this.loginForm.setErrors({
            serverError: err,
          })
        }
      }
    })
  }

}
