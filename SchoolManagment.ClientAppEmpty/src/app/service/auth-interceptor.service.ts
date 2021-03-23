import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpParams
} from '@angular/common/http';
import { take, exhaustMap } from 'rxjs/operators';

import { AuthenticateUserService } from './authenticate-user.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthenticateUserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    return this.authService.isLoggedIn.pipe(
      take(1),
      exhaustMap(user => {
        if (!user) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          setHeaders:
            { 'Authorization': `Bearer ${user.token}` }
        });

        console.log(modifiedReq);
        return next.handle(modifiedReq);
      })
    );
  }
}
