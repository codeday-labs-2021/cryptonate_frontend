import { Component, OnInit, EventEmitter ,Output,Input} from '@angular/core';
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
  @Input() Type: String="0";
  loginForm: FormGroup=new FormGroup({});
  submitted = false;

  @Output() LoginEvent= new EventEmitter<boolean>();

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
      debugger;
      if (res['message'] != "Authentication failed") {
        localStorage.setItem("user",JSON.stringify(res));
        this.LoginEvent.next(true);
        // if(this.Type=="1"){
        //   this.LoginEvent.next(true);
        // }else{
        //         this.router.navigate(["/Dashboard"]);
        // }
      }
    })
  }

}
