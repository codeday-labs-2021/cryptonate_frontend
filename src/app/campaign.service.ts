import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Campaign } from "./campaigns";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class CampaignService{
    private _url: string="http://localhost:3000/api/campaigns";
    constructor(private http:HttpClient){}

    getCampaign():Observable<Campaign[]>{
        return this.http.get<Campaign[]>(this._url);
    }

    getCampaignById(id:string): Observable<any>{
        return this.getCampaign()
        .pipe(
            map((campaigns: Campaign[]) => campaigns
            .find(campaign => campaign._id === id))
        );
    }
}