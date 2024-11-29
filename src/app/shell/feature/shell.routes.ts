import { Routes } from '@angular/router';

import { MainLayoutComponent } from '../ui/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('../../auth/feature/login/login.component').then((m) => m.LoginComponent)
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../home/feature/home-shell/home.routes').then((m) => m.routes)
      },
      {
        path: 'feature1',
        loadChildren: () =>
          import('../../funcionalidad1/feature/funcionalidad1-shell/funcionalidad1.routes').then((m) => m.routes)
      },
      {
        path: 'feature2',
        loadChildren: () =>
          import('../../funcionalidad2/feature/funcionalidad2-shell/funcionalidad2.routes').then((m) => m.routes)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
