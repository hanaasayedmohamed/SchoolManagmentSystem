import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { student } from '../models/student';
import { studentService } from '../service/student.service';
import { BrowserModule } from '@angular/platform-browser'
import { User } from '../models/user';
import { AuthenticateUserService } from '../service/authenticate-user.service';

@Component(
  {
    templateUrl: 'home.component.html',
    styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.css']
  }

)
export class HomeComponent {
  loading = false;
  users: User[] = [];

  students: student[] = [];

  token: any;

  constructor(private studentService: studentService, private http: HttpClient) {

  }

  ngOnInit(): void {

    this.token = localStorage.getItem("Token") || {};
    console.log(this.token);

    this.studentService.getstudents(this.token,
      "1", "2", "").subscribe((studentList: any) => {
        console.log(studentList);
        this.students = studentList;
      });
  }
}
