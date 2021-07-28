import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Donation} from "./donation";
import {environment} from "../../environments/environment";
import {Campaign} from "../campaigns";

@Injectable()
export class DonationService{
  constructor(private http:HttpClient){}

  getUserDonations():Observable<Donation[]>{
    return this.http.get<Donation[]>(`${environment.apiUrl}/api/users/donations`);
  }

  getCampaignDonations(id:string):Observable<Donation[]>{
    return this.http.get<Donation[]>(`${environment.apiUrl}/api/campaigns/${id}/donations`);
  }

}
