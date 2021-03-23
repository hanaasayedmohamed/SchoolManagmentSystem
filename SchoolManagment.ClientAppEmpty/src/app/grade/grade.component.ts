import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Grade } from '../models/Grade';
import { GradeService } from '../service/grade.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class GradeComponent implements OnInit {

  grades: Grade[] = [];

  constructor(private gradeService: GradeService, private http: HttpClient, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.gradeService.getAll().subscribe((gradesList: any) => {
      console.log(gradesList);
      this.grades = gradesList;
    });
  }

}
