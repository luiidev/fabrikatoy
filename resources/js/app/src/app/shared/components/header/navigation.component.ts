import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { User } from 'src/app/admin/models/user.model';
import { AuthenticationService } from 'src/app/public/services/authentication.service.';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  @Input() sidebartype = '';
  @Input() sidebartheme = '';
  @Output() toggleSidebar = new EventEmitter<void>();
  @Output() toggleTheme = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};
  public user: User = {
    nick: '',
    full_name: '',
    email: '',
  };

  constructor(
    private authenticationService: AuthenticationService
  ) {}

  public selectedLanguage: unknown = {
    language: 'Español',
    code: 'es',
    type: 'ES',
    icon: 'es'
  }

  toggleSidebarType() {
    this.toggleSidebar.emit();
  }

  toggleThemeType() {
    this.toggleTheme.emit();
  }

  ngOnInit(): void {
    const user = this.authenticationService.getUser();
    if (user) {
      this.user = JSON.parse(user);
    }
  }

  logout() {
    this.authenticationService.logout();
  }
}
