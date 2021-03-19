import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentlistComponent } from './studentList/studentlist.component';

const routes: Routes = [
//{ path: '', component: HomeComponent, canActivate: [AuthGuard] },

  { path: '', component: HomeComponent },
  { path: 'students', component: StudentlistComponent },
  { path: 'students/:id', component: StudentDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
