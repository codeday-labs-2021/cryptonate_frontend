import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest, HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AddHeaderInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(localStorage.getItem("user")) {
      const jwt = JSON.parse(<string>localStorage.getItem("user"))["jwt"];

      // Clone the request to add the new header
      const clonedRequest = req.clone({ headers: req.headers.append('Authorization', `Bearer ${jwt}`) });

      // Pass the cloned request instead of the original request to the next handle
      return next.handle(clonedRequest).pipe(tap(() => {},
        (err: any) => {
          if(err instanceof HttpErrorResponse) {
            if(err.status === 401 ) {
              console.log("==================", "logging user out");
              this.router.navigateByUrl("/login");
            }
          }
        }));
    }
    return next.handle(req);
  }
}
