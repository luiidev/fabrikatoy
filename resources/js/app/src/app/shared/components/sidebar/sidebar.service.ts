import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RouteInfo } from './sidebar.metadata';
import { ROUTES } from './menu-items';

@Injectable({
    providedIn: 'root'
})
export class VerticalSidebarService {
    MENUITEMS: RouteInfo[] = ROUTES;

    private menuItemsBehaviorSubject: BehaviorSubject<RouteInfo[]> = new BehaviorSubject<RouteInfo[]>(this.routesFilterByRole('User'));

    get menuItemsObservable(): Observable<RouteInfo[]> {
      return this.menuItemsBehaviorSubject.asObservable();
    }

    set menuItemsRole(role: string) {
      const routes: RouteInfo[] = this.routesFilterByRole(role);

      this.menuItemsBehaviorSubject.next(routes);
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
