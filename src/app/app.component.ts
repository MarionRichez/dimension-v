import { Component } from '@angular/core';

import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public showLoader = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.showLoader = true;
    }

    if (event instanceof NavigationEnd) {
      this.showLoader = false;
    }

    if (event instanceof NavigationCancel) {
      this.showLoader = false;
    }

    if (event instanceof NavigationError) {
      this.showLoader = false;
    }
  }
}
