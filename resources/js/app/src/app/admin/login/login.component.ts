import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service.';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: Login = {
    nick: '',
    password: '',
    device_name: 'web-app',
    remenber: false,
  };

  errorMessage = '';
  isLoadingResults = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  login() {
    this.errorMessage = '';
    this.isLoadingResults = true;
    this.authService.login(this.user)
      .subscribe(response => {
        const AuthResponse = response[1];
        this.authService.setToken(AuthResponse.token);
        this.authService.setUser(JSON.stringify(AuthResponse.data));

        this.router.navigate(['/productos']);
      }, response => {
        this.isLoadingResults = false;
        this.errorMessage = response.error.message;
      });
  }
}
