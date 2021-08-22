import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoaderService} from '../service/loader.service'
import { finalize } from 'rxjs/operators';
@Injectable()
export class LoaderInterceptorInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.loaderService.isLoading.next(true);
    return next.handle(request).pipe(
      finalize( () => {
            this.loaderService.isLoading.next(false);
      })
    )
  }
}
