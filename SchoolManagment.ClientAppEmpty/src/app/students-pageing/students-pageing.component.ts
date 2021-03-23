import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-pageing',
  //templateUrl: './students-pageing.component.html',
  styleUrls: ['./students-pageing.component.css'],
  template:
    `
    <ul>
      <li *ngFor="let item of collection | paginate: { itemsPerPage: 10, currentPage: p }"> {{ item.studentname }} </li>
    </ul>
               
    <pagination-controls (pageChange)="p = $event"></pagination-controls>
    `
})

export class StudentsPageingComponent implements OnInit {

constructor() { }

  ngOnInit(): void {

     this.collection  = [

  { "id": 0, "studentname": "1" },
  { "id": 1, "studentname": "2" },
  { "id": 2, "studentname": "3" },
  { "id": 2, "studentname": "4" },
  { "id": 2, "studentname": "5" },
  { "id": 2, "studentname": "6" },
  { "id": 2, "studentname": "7" },
  { "id": 2, "studentname": "8" },
  { "id": 2, "studentname": "9" },
  { "id": 2, "studentname": "10" },
  { "id": 2, "studentname": "11" },
  { "id": 2, "studentname": "12" },
  { "id": 2, "studentname": "13" },
  { "id": 2, "studentname": "144" },
  { "id": 2, "studentname": "15" },
  { "id": 2, "studentname": "16" },
  { "id": 2, "studentname": "17" }
    ];
  }
  p: number = 1;
  collection: any;

}
