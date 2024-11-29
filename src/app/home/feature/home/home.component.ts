import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { HomeStore } from '../../data-access';
import { TechLogoComponent } from '../../ui/';

@Component({
  selector: 'app-home',
  imports: [TechLogoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  #store = inject(HomeStore);

  vm = computed(() => {
    const logos = this.#store.logos();
    return { logos };
  });
}
