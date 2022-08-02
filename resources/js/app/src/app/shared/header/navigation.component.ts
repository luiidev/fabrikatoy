import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service.';

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
    private authService: AuthService
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
    const user = this.authService.getUser();
    if (user) {
      this.user = JSON.parse(user);
    }
  }

  logout() {
    this.authService.logout();
  }
}
