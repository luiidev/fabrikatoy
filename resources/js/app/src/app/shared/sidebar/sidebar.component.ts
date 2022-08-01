import { Component, OnInit } from '@angular/core';
import { ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  public sidebarnavItems:RouteInfo[]=[];

  // this is for the open close
  addExpandClass(element: string) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  constructor(
    private menuEventService: SidebarEventService
  ) {}

  // End open close
  ngOnInit() {
    this.menuEventService.events.subscribe((role: string) => {
      if (role === 'Super') {
        this.sidebarnavItems = ROUTES.filter(item => ['Super', 'Admin', 'User'].indexOf(item.role) !== -1);
      } else if (role === 'Admin') {
        this.sidebarnavItems = ROUTES.filter(item => ['Admin', 'User'].indexOf(item.role) !== -1);
      } else {
        this.sidebarnavItems = ROUTES.filter(item => ['User'].indexOf(item.role) !== -1);
      }
    });

    this.sidebarnavItems = ROUTES.filter(item => ['User'].indexOf(item.role) !== -1);
  }
}

export class SidebarEventService {
  protected eventSubject = new Subject<string>();
  public events = this.eventSubject.asObservable();

  dispathEvent(role: string) {
     this.eventSubject.next(role);
  }
}
