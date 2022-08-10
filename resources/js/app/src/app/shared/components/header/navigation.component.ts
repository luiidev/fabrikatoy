import { Component, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { User } from 'src/app/admin/models/user.model';
import { AuthenticationService } from 'src/app/public/services/authentication.service.';
import { FullService } from '../full/full.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  sidebartheme = '';

  public config: PerfectScrollbarConfigInterface = {};
  public user: User | null;

  constructor(
    private authenticationService: AuthenticationService,
    private fullService: FullService
  ) {
    this.user = this.authenticationService.user;
  }

  public selectedLanguage: unknown = {
    language: 'Español',
    code: 'es',
    type: 'ES',
    icon: 'es'
  }

  sidebartypeToggle() {
    this.fullService.sidebartypeToggle();
  }

  sidebarthemeToggle() {
    this.fullService.sidebarthemeToggle();
  }

  logout() {
    this.authenticationService.logout();
  }

  ngOnInit(): void {
    this.fullService.sidebarthemeObservable.subscribe((theme: string) => {
      this.sidebartheme = theme;
    });
  }
}
