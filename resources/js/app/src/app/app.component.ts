import { Component } from '@angular/core';
import { Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { AuthenticationService } from './public/services/authentication.service.';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
          if (!this.authenticationService.getToken() && !event.url.includes('/login')) {
            this.router.navigate(['/login']);
          }
        }

        if (event instanceof NavigationEnd) {
          //
        }

        if (event instanceof NavigationError) {
          //
        }
    });
  }
}
