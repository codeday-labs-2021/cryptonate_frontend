import { Component, OnInit } from '@angular/core';
import {AuthService} from "../_services";
import {Router} from "@angular/router";
import {ApiService} from "../api/api.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {
  usd: string;

  constructor(
    private AuthSrv:AuthService,
    private ApiSrv:ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getConversionRate();
  }

  logout() {
    const res = this.AuthSrv.logout();

    res.subscribe(result => {
      if (result['message'] == "Log out successful") {
        localStorage.removeItem("user");

        this.router.navigate(["/Home"]);
      } else {
        console.log("===============", result);
      }
    });
  }


  isLoggedIn(): boolean {
    return !!localStorage.getItem("user");
  }

  getConversionRate() {
    this.ApiSrv.getEthUsdConversion()
      .subscribe(data => console.log(data));
  }

}
