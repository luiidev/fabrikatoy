import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service.';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    nick: "admin",
    password: "password",
    device_name: "web-app"
  };

  errorMessage: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  login() {
    this.authService.login(this.user)
      .subscribe(response => {
        const [csrfResponse, authResponse] = response;
        this.authService.setToken(authResponse.token);
        this.authService.setUser(JSON.stringify(authResponse.data));

        this.router.navigate(['/productos']);
      }, response => {
        this.errorMessage = response.error.message;
      });
  }

  ngOnInit() {
  }
}
