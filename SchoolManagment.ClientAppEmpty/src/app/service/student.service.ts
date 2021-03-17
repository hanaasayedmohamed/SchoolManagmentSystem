import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; 
import { student } from '../models/student';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class studentService {

  // studentobjlist: student[] = [];

  constructor(private http: HttpClient) { }

  getstudents(jwtToken: string, pageNumber: string, pageSize: string, gradefilter: string): Observable<student[]> {
    //TODO : implement auth  [add jwt token to header ]
    console.log(`${environment.apiUrl}${environment.liststudentsURl}PageNumber=${pageNumber}&PageSize=${pageSize}&GradeName=${gradefilter}`);

    const header = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken}`
      })
    }
    console.log(header);

    return this.http.get<student[]>(`${environment.apiUrl}${environment.liststudentsURl}`, header);
  }
  insertnewStudent(newStudent :student) {
    return this.http.put(`${environment.apiUrl}${environment.addnewStudent}`, newStudent, httpOptions);
  }

  generateToken(): Observable<string>{
    //TODO : implement Auth add user name + password bearer token to headers. 
    return this.http.get<string>(`${environment.apiUrl}${environment.generateTokenURL}`);
  }

}
