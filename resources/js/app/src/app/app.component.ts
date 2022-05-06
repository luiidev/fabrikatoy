import { Component } from '@angular/core';
import { Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { AuthService } from './services/auth.service.';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
          if (!this.authService.getToken() && !event.url.includes('/login')) {
            this.router.navigate(['/login']);
          }
        }
        if (event instanceof NavigationEnd) {}
    });
  }
}
