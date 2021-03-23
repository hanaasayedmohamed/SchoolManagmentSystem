import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { AuthenticateUserService } from './authenticate-user.service';
import { User } from '../models/user';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticateUserService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    return this.authService.loggedIn.pipe(
      take(1),
      map(user => {
        const isAuth = !!user;
        if (isAuth) {
          return true;
        }
        this.router.createUrlTree(['/login']);
        return false;
      }));
  }
}


    //return this.authService.isLoggedIn // {1}
    //  .pipe(
    //    take(1), // {2}
    //    map((isLoggedIn: boolean) => { // {3}
    //      if (!isLoggedIn) {
    //        this.router.navigate(['/login']); // {4}
    //        return false;
    //      }
    //      return true;
    //    })
    //  )
    //return this.authService.isLoggedIn.pipe(       // {1}
    //  .take(1)                               // {2}
    //   ,map((isLoggedIn: boolean) => {        // {3}
    //    if (!isLoggedIn) {
    //      this.router.navigate(['/login']);  // {4}
    //      return false;
    //    }
    //    return true;
    //  });
 
