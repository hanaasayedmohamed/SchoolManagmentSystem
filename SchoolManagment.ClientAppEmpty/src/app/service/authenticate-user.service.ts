import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(private http: HttpClient) { }

  login(_logincrentials: logincrentials): Observable<User> {

    console.log(`${environment.apiUrl}${environment.loginURL}`);
    return this.http.post<User>(`${environment.apiUrl}${environment.loginURL}`, _logincrentials, httpOptions);


    //getAll()
    //{
    //  const header = {
    //    headers: new HttpHeaders({
    //      'Content-Type': 'application/json',
    //      'Authorization': `Bearer ${jwtToken}`
    //    })
    //  }
    //  console.log(header);

    //  return this.http.get<student[]>(`${environment.apiUrl}${environment.liststudentsURl}`, header);
    //}
  } 

}
