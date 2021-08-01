
import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders} from "@angular/common/http";
import { User } from "../_models/user.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url: string= `${environment.apiUrl}/api/users`;

  constructor(private http: HttpClient) {}

  updateUser(
    first_name:string,
    last_name:string,
    email:string,
    occupation: string,
    organization: string,
    location: string,
    social_media_url: string,
    website_url: string,
    organization_email: string,
    about: string,
    id:string
    ){
    return this.http.patch<any>(`${environment.apiUrl}/api/users/${id}`,{
      first_name,
      last_name,
      email,
      occupation,
      organization,
      location,
      social_media_url,
      website_url,
      organization_email,
      about
    });
  }

createCampaign(
  occupation: string,
  organization: string,
  location: string,
  social_media_url: string,
  website_url: string,
  organization_email: string,
  about: string,
  id:string
  ){
  return this.http.patch<any>(`${environment.apiUrl}/api/users/${id}`,{
    occupation,
    organization,
    location,
    social_media_url,
    website_url,
    organization_email,
    about
  });
}

    getUser():Observable<User[]>{
        return this.http.get<User[]>(this._url);
    }

    //get User by CAMPAIGN ID
    getUserById(id:string): Observable<User|undefined>{
        console.log("user found");
        return this.getUser()
        .pipe(
            map((users: User[]) =>
            users.find(user => user._id === id))
        );

    }
}
