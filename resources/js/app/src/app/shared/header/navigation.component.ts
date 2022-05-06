import { Component, AfterViewInit, EventEmitter, Output, Input } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
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
  public user:any;

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
    this.user = JSON.parse(this.authService.getUser() || '{}');
  }

  logout() {
    this.authService.logout();
  }
}
