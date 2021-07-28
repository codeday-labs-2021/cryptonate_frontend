import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable()
export class AuthService {
    constructor(private http: HttpClient) { }

    signup(first_name:string, last_name:string, email:string, password:string){
        return this.http.post<any>(`${environment.apiUrl}/api/users/signup`,{
            first_name,
            last_name,
            email,
            password
        })
    }

    login(email:string, password:string) {
      return this.http.post<any>(`${environment.apiUrl}/api/users/login`,{
          email,
          password
      }, {withCredentials: true});
    }

    logout() {
      return this.http.get<any>(`${environment.apiUrl}/api/users/logout`, {withCredentials: true});
    }

    isLoggedIn(): boolean {
      return !!localStorage.getItem("user");
    }

}
