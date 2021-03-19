import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentlistComponent } from './studentList/studentlist.component';
import { StudentitemComponent } from './studentitem/studentitem.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms'; //Reactive Forms
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentlistComponent,
    StudentitemComponent,
    LoginComponent,
    HomeComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
