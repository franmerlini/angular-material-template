import { Routes } from '@angular/router';

import { HomeStore, LogoService } from '../../data-access';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    providers: [LogoService, HomeStore]
  }
];
