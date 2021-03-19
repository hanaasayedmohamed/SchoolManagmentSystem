import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { student } from '../models/student';
import { studentService } from '../service/student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['../login/login.component.css']
})
export class StudentlistComponent implements OnInit {

  students: student[] = [];
  token: any;

  studentslist!: Observable<student[]>;
  errorMsg!: string;

  newStudentForm!: FormGroup;


  constructor(private studentService: studentService, private http: HttpClient) {
    this.token = localStorage.getItem("Token") || {};
    console.log(this.token);

    this.newStudentForm = new FormGroup(
      {
        studentname: new FormControl(""),
        height: new FormControl(""),
        weight: new FormControl(""),
        gradeId: new FormControl(""),
        DateOfbirth: new FormControl(""),
      });

    //this.studentService.getstudents(this.token,
    //  "1", "2", "").subscribe((studentList: any) => {
    //    console.log(studentList);
    //    this.students = studentList;
    //  });

    //this.studentslist =
    //  this.studentService.getstudents(this.token,
    //    "1", "2", "")
    //    .pipe(
    //      catchError(error => {
    //        this.errorMsg = error.message;
    //        return of([]);
    //      })
    //    );

  }

  insertStudent() {

    const newStudent: student = {
      studentName: this.newStudentForm.controls["studentname"].value,
      height: this.newStudentForm.controls["height"].value,
      weight: this.newStudentForm.controls["weight"].value,
      gradeId: this.newStudentForm.controls["gradeId"].value,
      studentID: 0,
      dateOfBirth: this.newStudentForm.controls["DateOfbirth"].value,
      gradeName: "",
      section: "",
      photo : "" 
    }

    console.log(newStudent);

    this.studentService.insertnewStudent(newStudent).subscribe();
  }

  ngOnInit(): void {


      //.subscribe(students => this.students = students);

      //.subscribe((results: any) => { console.log(results); });
  }

}
