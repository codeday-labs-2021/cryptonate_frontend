import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders} from "@angular/common/http";
import { Campaign } from "./campaigns";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
    })
}
@Injectable()
export class CampaignService{
    private _url: string="http://localhost:3000/api/campaigns";

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
}