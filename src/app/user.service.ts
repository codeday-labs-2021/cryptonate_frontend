import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  _id = JSON.parse(<string>localStorage.getItem("user"))["user"]["_id"];

  constructor(private http: HttpClient) { }

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
    about: string
    ){
    return this.http.patch<any>(`${environment.apiUrl}/api/users/${this._id}`,{
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
}
