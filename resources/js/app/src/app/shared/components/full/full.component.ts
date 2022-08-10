import { Component, OnInit, HostListener } from "@angular/core";
import { User } from "src/app/admin/models/user.model";
import { AuthenticationService } from "src/app/public/services/authentication.service.";
import { FullService } from "./full.service";

@Component({
  selector: "app-full-layout",
  templateUrl: "./full.component.html",
  styleUrls: ["./full.component.scss"],
})
export class FullComponent implements OnInit {

  public isCollapsed = false;
  public innerWidth = 0;
  public showMobileMenu = false;
  public expandLogo = false;
  public sidebartype = 'full';
  public user: User | null;

  constructor(
    private authenticationService: AuthenticationService,
    private fullService: FullService
  ) {
    this.user = this.authenticationService.user;
  }

  Logo() {
    this.expandLogo = !this.expandLogo;
  }

  @HostListener("window:resize", ["$event"])
  onResize() {
    this.handleSidebar();
  }

  handleSidebar() {
    // this.innerWidth = window.innerWidth;
    // if (this.innerWidth < 1170) {
    //   this.sidebartype = "full";
    // }
  }

  ngOnInit() {
    this.fullService.sidebartypeObservable.subscribe((type: string) => {
      this.sidebartype = type;
    });

    this.handleSidebar();
  }
}
