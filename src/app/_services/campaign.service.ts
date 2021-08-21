import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders, HttpResponse} from "@angular/common/http";
import { Campaign } from "../_models/campaigns.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {environment} from "../../environments/environment";
import { Tags } from "../_models";

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
    campaignTag : Campaign[];
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

    getFourCampaigns():Observable<Campaign[]>{
      return this.http.get<Campaign[]>(`${this._url}/get4`);
    }

    getCampaignById(id:string): Observable<Campaign|undefined>{
        console.log("campaign found");
        return this.getCampaign()
        .pipe(
            map((campaigns: Campaign[]) =>
            campaigns.find(campaign => campaign._id === id))
        );

    }

   getRecentCampaign():Observable<Campaign[]>{
    return this.http.get<Campaign[]>(`${environment.apiUrl}/api/campaigns/get4`);
   }

    getUserCampaigns():Observable<Campaign[]>{
      return this.http.get<Campaign[]>(`${environment.apiUrl}/api/users/campaigns`);
    }

    // createCampaign(formData: FormData, image_url:string){
    //   return this.http.post<any>(`${environment.apiUrl}/api/campaigns`,image_url,{formData},{withCredentials: true});
    // }

    createCampaign(
      formData:FormData
          ){
          return this.http.post<any>(`${environment.apiUrl}/api/campaigns`,formData);
        }

        uploadImage(data) {
    
          return this.http.post(`${environment.apiUrl}/api/campaigns/uploadImage`, data);
      }

}
