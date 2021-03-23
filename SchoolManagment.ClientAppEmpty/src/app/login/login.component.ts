import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
    error: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private authenticateUserService: AuthenticateUserService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        username: new FormControl("", Validators.required),
        password: new FormControl("", [Validators.required])
      });
  }

  onSubmit() {

    const _logincrentials: logincrentials = {

      Username: this.loginForm.controls["username"].value,
      Password: this.loginForm.controls["password"].value
    }

    let authObj: Observable<User>;

    authObj = this.authenticateUserService.login(_logincrentials);

    authObj.subscribe(
      resData => {
        console.log(resData);

      //  localStorage.setItem('currentUser', JSON.stringify(resData));
      //  localStorage.setItem('Token', JSON.stringify(resData.token));

        this.router.navigate(['students']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
      }
    );

    //    this.logginedUser = user;
    //   localStorage.setItem('currentUser', JSON.stringify(user));
    //  localStorage.setItem('Token', JSON.stringify(user.token));
    //  const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //  console.log(`return URL : from login page to redirect to home ${returnUrl}`);
    //this.router.navigate([returnUrl]);
}

  clear() { }

}
