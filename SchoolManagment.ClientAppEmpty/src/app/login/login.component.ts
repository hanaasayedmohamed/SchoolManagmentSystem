import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { logincrentials } from '../models/loginRequest';
import { User } from '../models/user';
import { AuthenticateUserService } from '../service/authenticate-user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  logginedUser!: User;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authenticateUserService: AuthenticateUserService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        username: new FormControl(""),
        password: new FormControl("")
      });
  }

  onSubmit() {

    // console.log( this.loginForm.value);

    const _logincrentials: logincrentials = {

      Username: this.loginForm.controls["username"].value,
      Password: this.loginForm.controls["password"].value
    }

    this.authenticateUserService.login(_logincrentials).subscribe((user: User) => {
     // console.log(user);
      this.logginedUser = user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('Token', JSON.stringify(user.token));


      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //  console.log(`return URL : from login page to redirect to home ${returnUrl}`);
      this.router.navigate([returnUrl]);

    });
  }

  clear() {
  

  }
}
