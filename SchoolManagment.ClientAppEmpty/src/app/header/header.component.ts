import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from '../models/user';
import { AuthenticateUserService } from '../service/authenticate-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // styleUrls: ['./header.component.css']
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: boolean = false;
  userFullName: string = "";
  private userSub: Subscription = new Subscription;


  constructor(private authService: AuthenticateUserService) {

    
  }

  ngOnInit(): void {

    this.userSub = this.authService.isLoggedIn.subscribe(user => {

      //const FullName = `${user.firstName}  ${user.lastName}`;
      this.isAuthenticated = !!user;
     // this.userFullName = FullName;

    //  console.log("full name"  + this.userFullName);
     //   console.log(!!user); console.log(!user);
    });

    
  //this.userSub = this.authService.loggedIn.subscribe(user => {
  //  this.isAuthenticated =  user.isAuthenticated;
  //  console.log("this.isAuthenticated" + user.isAuthenticated); // true
  //  console.log(!user); // true
  //  console.log(!!user); //false
  //});
}

logout() {
  this.authService.logout();

}
}
