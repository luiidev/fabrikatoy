import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { Login } from 'src/app/public/models/login.model';
import { AuthenticationService } from 'src/app/public/services/authentication.service.';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: Login = {
    nick: 'admin',
    password: 'password',
    device_name: 'web-app',
    remenber: false,
  };

  errorMessage = '';
  isLoadingResults = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  login() {
    this.errorMessage = '';
    this.isLoadingResults = true;
    this.authenticationService.login(this.user)
      .pipe(finalize(() => this.isLoadingResults = false))
      .subscribe({
        next: response => {
          const AuthResponse = response[1];

          this.authenticationService.token = AuthResponse.token;
          this.authenticationService.user = AuthResponse.data;

          this.router.navigate(['/admin/punto-de-venta']);
        },
        error: response => {
          this.errorMessage = response.error.message;
        }
      })
  }
}
