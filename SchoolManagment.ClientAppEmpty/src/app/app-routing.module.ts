import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradeComponent } from './grade/grade.component';

import { HomeComponent } from './home/home.component';
import { InsertStudentComponent } from './insert-student/insert-student.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth.guard';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentlistComponent } from './studentList/studentlist.component';
import { StudentsPageingComponent } from './students-pageing/students-pageing.component';

const routes: Routes = [
//{ path: '', component: HomeComponent, canActivate: [AuthGuard] },

  //{ path: '', component: HomeComponent },
  { path: 'students', component: StudentlistComponent, canActivate: [AuthGuard] },
  { path: 'insertstudent', component: InsertStudentComponent, canActivate: [AuthGuard] },
  { path: 'students/:id', component: StudentDetailComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'Grades', component: GradeComponent, canActivate: [AuthGuard] },
  { path: 'StudentPaging', component: StudentsPageingComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
