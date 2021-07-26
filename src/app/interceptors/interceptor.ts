import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class AddHeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(localStorage.getItem("user")) {
      const jwt = JSON.parse(<string>localStorage.getItem("user"))["jwt"];

      console.log("=================", jwt);

      // Clone the request to add the new header
      const clonedRequest = req.clone({ headers: req.headers.append('Authorization', `Bearer ${jwt}`) });

      // Pass the cloned request instead of the original request to the next handle
      return next.handle(clonedRequest);
    }
    return next.handle(req);
  }
}
