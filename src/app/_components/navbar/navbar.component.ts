import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../_services";
import {Router} from "@angular/router";
import {ApiService} from "../../_services/api.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {
  ethPrice: string="0";

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
        localStorage.removeItem("campaigns");

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
      .subscribe(res => {
        if(res["result"]=='successful'){
          localStorage.setItem("ETHPRICE", res["data"]);
          this.ethPrice = res["data"];
        }
      });
  }

}
