import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders} from "@angular/common/http";
import { Campaign } from "../_models/campaigns.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {environment} from "../../environments/environment";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
    })
}
@Injectable({
    providedIn: "root",
  })
export class CampaignService{
    private _url: string= `${environment.apiUrl}/api/campaigns`;
   // _id = JSON.parse(<string>localStorage.getItem("user"))["user"]["_id"];

    constructor(private http:HttpClient){}

    getEvents(){
    const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
    }),
    };
    return this.http.get<Campaign[]>(this._url,httpOptions);
    }


    getCampaign():Observable<Campaign[]>{
        return this.http.get<Campaign[]>(this._url);
    }

    getCampaignById(id:string): Observable<Campaign|undefined>{
        console.log("campaign found");
        return this.getCampaign()
        .pipe(
            map((campaigns: Campaign[]) =>
            campaigns.find(campaign => campaign._id === id))
        );

    }

    getUserCampaigns():Observable<Campaign[]>{
      return this.http.get<Campaign[]>(`${environment.apiUrl}/api/users/campaigns`);
    }

    createCampaign(
    title: string,
    description:string,
    tags: string[],
    date_end: Date,
    goal: number,
    image_url: string
        ){
        return this.http.post<any>(`${environment.apiUrl}/api/campaigns`,{
          title,
          description,
          tags,
          date_end,
          goal,
          image_url
        },{withCredentials: true});
      }
}
