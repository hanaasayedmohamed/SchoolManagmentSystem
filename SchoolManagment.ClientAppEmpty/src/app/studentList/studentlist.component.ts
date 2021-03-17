import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { student } from '../models/student';
import { studentService } from '../service/student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  students: student[] = [];

  constructor(private studentService: studentService, private http: HttpClient) { }

  ngOnInit(): void {
    this.studentService.getstudents(environment.token,
      "1", "2", "").subscribe((results: any) => {
        console.log(results);
      });

      //.subscribe(students => this.students = students); console.log();
  }

}
