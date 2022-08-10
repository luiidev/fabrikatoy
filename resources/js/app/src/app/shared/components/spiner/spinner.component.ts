import {
  Component,
  Input,
  OnDestroy,
  Inject,
  ViewEncapsulation
} from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'spinner',
  template: `<div class="preloader" *ngIf="isSpinnerVisible || isLoading">
        <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>`,
  encapsulation: ViewEncapsulation.None
})
export class SpinnerComponent implements OnDestroy {
  @Input() isLoading = false;
  public isSpinnerVisible = true;

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
    this.router.events.subscribe({
      next: (event) => {
        if (event instanceof NavigationStart) {
          this.isSpinnerVisible = true;
        }
        else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
          this.isSpinnerVisible = false;
        }
      },
      error: () => {
        this.isSpinnerVisible = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.isSpinnerVisible = false;
  }
}
