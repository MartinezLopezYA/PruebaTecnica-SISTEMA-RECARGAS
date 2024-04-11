import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private auth: LoginService,
    private rout: Router  ) {}

  login() {
    this.auth.login(this.username, this.password)
      .subscribe(
        (res) => {
          if (res) {
            sessionStorage.setItem('access_token', res.access_token)
            console.log(sessionStorage.getItem('access_token'));
            this.rout.navigate(['/recarga']);
          }
        },
        error => {
          console.error('Error:', error);
        }
      );
  }

}
