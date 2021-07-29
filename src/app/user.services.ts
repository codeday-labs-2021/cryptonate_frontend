import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders} from "@angular/common/http";
import { User } from "./user";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {environment} from "../environments/environment";

@Injectable()
export class UserServices{

    private _url: string= `${environment.apiUrl}/api/users`;
    constructor(private http:HttpClient){}

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

    //get User by AUTHOR ID
}
