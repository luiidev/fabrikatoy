import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FullService {
  private defaultSidebartype = 'mini-sidebar';
  private defaultSidebartheme = 'dark';
  private privateSidebartype = this.defaultSidebartype;
  private privateSidebartheme = this.defaultSidebartheme;
  private sidebartypeBehaviorSubject = new BehaviorSubject<string>(this.defaultSidebartype);
  private sidebarthemeBehaviorSubject = new BehaviorSubject<string>(this.defaultSidebartheme);

  get sidebartypeObservable(): Observable<string> {
    return this.sidebartypeBehaviorSubject.asObservable();
  }

  set sidebartype(type: string) {
    this.sidebartypeBehaviorSubject.next(type);
  }

  sidebartypeToggle(): void {
    this.sidebartypeBehaviorSubject.next(this.toggleSidebarType());
  }

  get sidebarthemeObservable(): Observable<string> {
    return this.sidebarthemeBehaviorSubject.asObservable();
  }

  set sidebartheme(theme: string) {
    this.sidebarthemeBehaviorSubject.next(theme);
  }

  sidebarthemeToggle(): void {
    this.sidebarthemeBehaviorSubject.next(this.toggleThemeTheme());
  }

  private toggleSidebarType(): string {
    switch (this.privateSidebartype) {
      case "full":
        this.privateSidebartype = "mini-sidebar";
        break;
      case "mini-sidebar":
        this.privateSidebartype = "full";
        break;
      default: this.privateSidebartype = this.defaultSidebartype;
    }

    return this.privateSidebartype;
  }

  private toggleThemeTheme(): string {
    switch (this.privateSidebartheme) {
      case "dark":
        this.privateSidebartheme =  "";
        break;
      case "":
        this.privateSidebartheme =  "dark";
        break;
      default: this.privateSidebartheme =  this.defaultSidebartheme;
    }

    document.body.dataset['theme'] = this.privateSidebartheme;

    return this.privateSidebartheme;
  }
}
