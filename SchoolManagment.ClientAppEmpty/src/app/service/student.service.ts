import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { student } from '../models/student';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { PaginatePipe } from 'ngx-pagination';
import { paginateResult } from '../models/user.model';



@Injectable({
  providedIn: 'root'
})
export class studentService {
  errorMsg!: string;
  paginateResults: paginateResult = new paginateResult; 
  // token: {};
  // studentobjlist: student[] = [];

  constructor(private http: HttpClient) {
    //  this.token = localStorage.getItem("Token") || {};
    // console.log(this.token);
  }

  getstudents(pageNumber: string, pageSize: string, gradefilter: string):

    Observable<any> {
    //TODO : implement auth  [add jwt token to header ]
    const getStudentlistURL = `${environment.apiUrl}${environment.liststudentsURl}PageNumber=${pageNumber}&PageSize=${pageSize}&GradeName=${gradefilter}`;

    console.log(getStudentlistURL);

    //const header = {
    //  headers: new HttpHeaders({
    //    'Content-Type': 'application/json',
    //    'Authorization': `Bearer ${jwtToken}`
    //  })
    //}

    //this.http .get<any>(getStudentlistURL, { observe: 'response' })

    return this.http
      .get<any>(getStudentlistURL, { responseType: "json", observe: 'response' })
      .pipe(
        map(Response => {

          console.log(Response.body);
          console.log(Response.headers.get('X-Pagination'));

          this.paginateResults.result = Response.body;

          if (Response.headers.get('X-Pagination') != null)
          {
            this.paginateResults.pagination = JSON.parse(Response.headers.get('X-Pagination') || '{}') ;
          }
          return this.paginateResults;
        }),

        catchError(error => {
          let errorMsg: string = "";

          if (error.error instanceof ErrorEvent) {
            this.errorMsg = `Error: ${error.error.message}`;
          }
          else {
            this.errorMsg = this.getServerErrorMessage(error);
          }
          console.log(this.errorMsg);

          return throwError(this.errorMsg);
        })

      );


  }



  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 404: {
        return `Not Found: ${error.message}`;
      }
      case 403: {
        return `Access Denied: ${error.message}`;
      }
      case 500: {
        return `Internal Server Error: ${error.message}`;
      }
      default: {
        return `Unknown Server Error: ${error.message}`;
      }

    }
  }

  insertnewStudent(newStudent: student): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${this.token}`
      })
    }

    return this.http.post(`${environment.apiUrl}${environment.addnewStudent}`, newStudent);
  }
}
