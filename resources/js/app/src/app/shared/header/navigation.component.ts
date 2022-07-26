import { Component, AfterViewInit, EventEmitter, Output, Input } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service.';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit {
  @Input() sidebartype:string = '';
  @Input() sidebartheme:string = '';
  @Output() toggleSidebar = new EventEmitter<void>();
  @Output() toggleTheme = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};
  public user: User = {
    nick: '',
    full_name: '',
    email: '',
    phone: '',
    image: '',
    role_name: '',
    company: {
      name: ''
    }
  };

  constructor(
    private authService: AuthService
  ) {}

  public selectedLanguage: any = {
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

  ngAfterViewInit() {
    const user = this.authService.getUser();
    if (user) {
      this.user = JSON.parse(user);
    }
  }

  logout() {
    this.authService.logout();
  }
}
