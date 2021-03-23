import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Grade } from '../models/Grade';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Grade[]>(`${environment.apiUrl}${environment.generateGradesURL}`);
  }
}
