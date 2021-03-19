import { Component, Input, OnInit } from '@angular/core';
import { student } from '../models/student';
import { studentService } from '../service/student.service';

@Component({
  selector: 'app-studentitem',
  templateUrl: './studentitem.component.html',
  styleUrls: ['./studentitem.component.css']
})
export class StudentitemComponent implements OnInit {

  student: student | undefined;
 
  constructor(private studentservice: studentService) { }

  ngOnInit(): void {
  }

}
