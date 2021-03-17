import { Component, OnInit } from '@angular/core';
import { student } from '../models/student';

@Component({
  selector: 'app-studentitem',
  templateUrl: './studentitem.component.html',
  styleUrls: ['./studentitem.component.css']
})
export class StudentitemComponent implements OnInit {
  student: student = new student;

  constructor() { }

  ngOnInit(): void {
  }

}
