import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Grade } from '../models/Grade';
import { student } from '../models/student';
import { GradeService } from '../service/grade.service';
import { studentService } from '../service/student.service';

@Component({
  selector: 'app-insert-student',
  templateUrl: './insert-student.component.html',
  styleUrls: ['../login/login.component.css']
})
export class InsertStudentComponent implements OnInit {
   newStudentForm : FormGroup;
   grades: Grade[] = [];

  constructor(private studentService: studentService, private gradeService: GradeService, private http: HttpClient) {
    this.newStudentForm = new FormGroup(
      {
        studentname: new FormControl("", Validators.required),
        height: new FormControl("", Validators.required),
        weight: new FormControl("", Validators.required),
        gradeId: new FormControl("", Validators.required),
        DateOfbirth: new FormControl("", Validators.required),
        //gradelist: new FormControl("", Validators.required),
      });
  }

  ngOnInit(): void {

    this.gradeService.getAll().subscribe((gradesList: any) => {
      this.grades = gradesList;
      console.log(this.grades);
    });
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
      photo: ""
    }

    console.log(newStudent);

    this.studentService.insertnewStudent(newStudent).subscribe(
        (      response: any) => {
        console.log(response);
      },
        (      error: any) => {
        console.log(error);
      });
  }

}
