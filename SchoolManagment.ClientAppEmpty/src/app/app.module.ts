import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentlistComponent } from './studentList/studentlist.component';
import { StudentitemComponent } from './studentitem/studentitem.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //Reactive Forms
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { InsertStudentComponent } from './insert-student/insert-student.component';
import { studentService } from './service/student.service';
import { AuthInterceptorService } from './service/auth-interceptor.service';
import { GradeComponent } from './grade/grade.component';
import { GradeService } from './service/grade.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { StudentsPageingComponent } from './students-pageing/students-pageing.component';
import { HeaderComponent } from './header/header.component'; // <-- import the module

@NgModule({
  declarations: [
    AppComponent,
    StudentlistComponent,
    StudentitemComponent,
    LoginComponent,
    HomeComponent,
    StudentDetailComponent,
    InsertStudentComponent,
    GradeComponent,
    StudentsPageingComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    NgxPaginationModule,
    FormsModule
],
  providers: [
    studentService, GradeService , { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
