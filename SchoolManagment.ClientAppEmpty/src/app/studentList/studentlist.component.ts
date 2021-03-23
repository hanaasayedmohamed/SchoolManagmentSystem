import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginatePipe } from 'ngx-pagination';
import { config, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Grade } from '../models/Grade';
import { student } from '../models/student';
import { GradeService } from '../service/grade.service';
import { studentService } from '../service/student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.css']
  //styleUrls: ['../login/login.component.css']
})
export class StudentlistComponent implements OnInit {

  searchForm!: FormGroup;


  students: student[] = [];

  filteredStudents: student[] = [];

  errorMsg!: string;
  page: number = 1;
  pageNumber: string = "1";
  pageSize: string = "5";

  _listFilter!: string;
  config!: { itemsPerPage: string; currentPage: string; totalItems: string; };

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(val: string) {
    this._listFilter = val;

    this.filteredStudents = this.listFilter ? this.performFilter(this.listFilter) : this.students;

  }

  performFilter(filterBy: string): any {

    filterBy = filterBy.toLowerCase();

    //  return this.students.filter(student => student.gradeName.toLowerCase().indexOf(filterBy) !== -1);
    this.getStudents(this.pageNumber);
  }

  Filter() {
    this.getStudents(this.pageNumber);

  }
  constructor(private studentService: studentService, private http: HttpClient, private router: Router,
    private route: ActivatedRoute) {
    // this.token = localStorage.getItem("Token") || {};
    // console.log(this.token);

    this.listFilter = "";

  }

  ngOnInit(): void {

    this.searchForm = new FormGroup(
      {
        gradename: new FormControl("", Validators.required)
      });

    this.config = {
      itemsPerPage: this.pageSize,
      currentPage: this.pageNumber,
      totalItems: "5"
    }

    this.getStudents(this.pageNumber);
  }
    //this.studentService.getstudents(
    //  this.pageNumber, this.pageSize, this.listFilter).subscribe(

    //    resp => {
    //      this.students = resp.body;
    //      this.filteredStudents = this.students;

    //    });
  onSubmit() {
    this.listFilter = this.searchForm.controls["gradename"].value;
    console.log(this.listFilter);
    this.getStudents(this.pageNumber);
  }

  pageChanged(event: any) {
    this.getStudents(event);
  }

  getStudents(pageNumber: string = "1") {

    this.studentService.getstudents(
      pageNumber, this.pageSize, this.listFilter).subscribe(
        (response: any) => {

          // console.log(response.headers.get('X-Pagination'));
          console.log(response.pagination);

          this.students = response.result;
          this.filteredStudents = this.students;

          this.config = {
            itemsPerPage: this.pageSize,
            currentPage: response.pagination.CurrentPage,
            totalItems: response.pagination.TotalCount,
          };
        });
  }


  onNewStudent() {
    this.router.navigate(['../insertstudent'], { relativeTo: this.route });
  }

}
