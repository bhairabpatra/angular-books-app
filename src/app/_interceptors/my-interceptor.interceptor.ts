import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class MyInterceptorInterceptor implements HttpInterceptor {

  constructor(private auttService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {

     let token=  this.auttService.getToken();
        request = request.clone({
            headers:request.headers.set('Authorization' , 'JWT'+ token)
        })
      return next.handle(request);
  }
}
