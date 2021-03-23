import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { logincrentials } from '../models/loginRequest';
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class AuthenticateUserService {

  public loggedIn = new BehaviorSubject<User>(null as unknown as User); // {1}

  get isLoggedIn() {
    return this.loggedIn.asObservable(); 
  }


  constructor(private http: HttpClient, private router: Router) { }

  logout() {

    this.loggedIn.next(null as unknown as User);

    this.router.navigate(['/login']);

  }
    
  login(_logincrentials: logincrentials): Observable<User> {

    console.log(`${environment.apiUrl}${environment.loginURL}`);
    return this.http.post<User>(`${environment.apiUrl}${environment.loginURL}`, _logincrentials, httpOptions)
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            resData.username,
            resData.id,
            resData.token,
            resData.firstName,
            resData.lastName,
            resData.isAuthenticated,
            resData.authenticationType,
            resData.ExpireOn
          );
        })
      );


  }
  private handleAuthentication(
    username: string,
    userId: number,
    token: string,
    firstName: string,
    lastName: string,
    isAuthenticated: boolean,
    authenticationType: string, ExpireOn : Date
  ) {
    const user: User = {
      username : username,
      id : userId,
      token: token,
      firstName: firstName,
      lastName: lastName,
      isAuthenticated: isAuthenticated,
      authenticationType: authenticationType,
      ExpireOn: ExpireOn
    }
    console.log(user);
    this.loggedIn.next(user);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(errorMessage);
  }

}
