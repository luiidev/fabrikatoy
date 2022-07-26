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
    private menuEventService: MenuEventService
  ) {}

  // End open close
  ngOnInit() {
    this.menuEventService.events.subscribe((isSuper: boolean) => {
      this.sidebarnavItems = isSuper ? ROUTES : ROUTES.filter(item => item.super === false);
    });

    this.sidebarnavItems = ROUTES.filter(item => item.super === false);
  }
}

export class MenuEventService {
  protected _eventSubject = new Subject<boolean>();
  public events = this._eventSubject.asObservable();

  dispathEvent(isSuper: boolean) {
     this._eventSubject.next(isSuper);
  }
}
