import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service.';
import { environment } from 'src/environments/environment';

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
    this.errorMessage = '';
    this.authService.login(this.user)
      .subscribe(response => {
        const [CsrfResponse, AuthResponse] = response;
        this.authService.setToken(AuthResponse.token);
        this.authService.setUser(JSON.stringify(AuthResponse.data));

        this.router.navigate(['/productos']);
      }, response => {
        this.errorMessage = response.error.message;
      });
  }

  ngOnInit() {
  }
}
