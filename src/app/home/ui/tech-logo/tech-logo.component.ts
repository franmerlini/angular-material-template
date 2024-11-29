import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Logo } from '../../domain';

@Component({
  selector: 'app-tech-logo',
  imports: [],
  templateUrl: './tech-logo.component.html',
  styleUrl: './tech-logo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechLogoComponent {
  logo = input.required<Logo>();
}
