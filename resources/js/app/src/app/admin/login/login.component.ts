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
    nick: "",
    password: "",
    device_name: "web-app",
    remenber: false,
  };

  errorMessage: string = '';
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
        const [CsrfResponse, AuthResponse] = response;
        this.authService.setToken(AuthResponse.token);
        this.authService.setUser(JSON.stringify(AuthResponse.data));

        this.router.navigate(['/productos']);
      }, response => {
        this.isLoadingResults = false;
        this.errorMessage = response.error.message;
      });
  }

  ngOnInit() {
  }
}
