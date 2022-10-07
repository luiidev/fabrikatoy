import { Component, OnInit } from '@angular/core';
import { RouteInfo } from './sidebar.metadata';
import { VerticalSidebarService } from './sidebar.service';

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
    private verticalSidebarService: VerticalSidebarService
  ) {}

  ngOnInit() {
    this.verticalSidebarService.menuItemsObservable.subscribe((items: RouteInfo[]) => {
      this.sidebarnavItems = items;
    });
  }
}
