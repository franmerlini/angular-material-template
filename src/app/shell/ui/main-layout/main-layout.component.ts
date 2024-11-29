import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

import { FooterComponent, HeaderComponent, SidenavComponent } from '../../ui';

@Component({
  selector: 'app-main-layout',
  imports: [MatSidenavModule, RouterOutlet, SidenavComponent, HeaderComponent, FooterComponent],
  template: `
    <mat-sidenav-container>
      <mat-sidenav mode="over" autoFocus="false" [(opened)]="opened">
        <app-sidenav (navItemClick)="onNavItemClick()" />
      </mat-sidenav>

      <mat-sidenav-content>
        <div class="min-h-screen flex flex-col">
          <app-header (toggleSidenav)="onToggleSidenav()" />

          <div class="flex-grow p-8">
            <router-outlet />
          </div>

          <app-footer />
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent {
  opened = false;

  onToggleSidenav(): void {
    this.opened = !this.opened;
  }

  onNavItemClick(): void {
    this.opened = false;
  }
}
