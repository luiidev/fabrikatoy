import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RouteInfo } from './sidebar.metadata';
import { ROUTES } from './menu-items';

@Injectable({
    providedIn: 'root'
})
export class VerticalSidebarService {
    MENUITEMS: RouteInfo[] = ROUTES;

    private menuItemsObservablePrivate: BehaviorSubject<RouteInfo[]> = new BehaviorSubject<RouteInfo[]>(this.routesFilterByRole('User'));

    get menuItemsObservable() {
      return this.menuItemsObservablePrivate.asObservable();
    }

    set menuItemsRole(role: string) {
      const routes: RouteInfo[] = this.routesFilterByRole(role);

      this.menuItemsObservablePrivate.next(routes);
    }

    private routesFilterByRole(role: string): RouteInfo[] {
      if (role === 'Super') {
        return this.MENUITEMS.filter(item => ['Super', 'Admin', 'User'].indexOf(item.role) !== -1);
      } else if (role === 'Administrador') {
        return this.MENUITEMS.filter(item => ['Admin', 'User'].indexOf(item.role) !== -1);
      }

      return this.MENUITEMS.filter(item => ['User'].indexOf(item.role) !== -1);
    }
}
