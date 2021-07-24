import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable()
export class AuthService {
    constructor(private http: HttpClient) { }


    sginup(firstname:string, lastname:string, email:string, password:string){
        return this.http.post<any>(`${environment.apiUrl}/api/users/signup`,{
            firstname,
            lastname,
            email,
            password
        })
    }

  
}
