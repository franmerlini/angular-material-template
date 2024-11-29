import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListItem, MatListItemIcon, MatListItemTitle, MatNavList } from '@angular/material/list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  imports: [MatNavList, MatListItem, RouterLink, MatIcon, MatListItemIcon, MatListItemTitle],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  navItemClick = output<void>();

  items = [
    { name: 'Feature 1', route: '/feature1', icon: 'category' },
    { name: 'Feature 2', route: '/feature2', icon: 'category' }
  ];
}
