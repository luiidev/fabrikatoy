import { Component, OnInit, HostListener } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { User } from "src/app/admin/models/user.model";
import { AuthenticationService } from "src/app/public/services/authentication.service.";

@Component({
  selector: "app-full-layout",
  templateUrl: "./full.component.html",
  styleUrls: ["./full.component.scss"],
})
export class FullComponent implements OnInit {

  public showHeaderAndAside = true;
  public isCollapsed = false;
  public innerWidth = 0;
  public defaultSidebar = "";
  public showMobileMenu = false;
  public expandLogo = false;
  public sidebartype = "full";
  public sidebartheme = "dark";
  public user: User = {
    nick: '',
    full_name: '',
    email: '',
  };

  constructor(
    public router: Router,
    private authenticationService: AuthenticationService
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeaderAndAside = event.url !== '/login';
      }
    });
  }

  Logo() {
    this.expandLogo = !this.expandLogo;
  }

  ngOnInit() {
    if (this.router.url === "/") {
      this.router.navigate(["/dashboard"]);
    }
    this.defaultSidebar = this.sidebartype;
    this.handleSidebar();
  }

  @HostListener("window:resize", ["$event"])
  onResize() {
    this.handleSidebar();
  }

  handleSidebar() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 1170) {
      this.sidebartype = "full";
    } else {
      this.sidebartype = this.defaultSidebar;
    }
  }

  toggleSidebarType() {
    switch (this.sidebartype) {
      case "full":
        this.sidebartype = "mini-sidebar";
        break;

      case "mini-sidebar":
        this.sidebartype = "full";
        break;

      default:
    }
  }

  toggleThemeType() {
    switch (this.sidebartheme) {
      case "dark":
        this.sidebartheme = "";
        break;

      case "":
        this.sidebartheme = "dark";
        break;

      default:
    }

    document.body.dataset['theme'] = this.sidebartheme;
  }

  ngAfterViewInit() {
    const user = this.authenticationService.getUser();
    if (user) {
      this.user = JSON.parse(user);
    }
  }
}
