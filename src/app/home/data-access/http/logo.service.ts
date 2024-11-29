import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Logo } from '../../domain';

@Injectable()
export class LogoService {
  getLogos(): Observable<Logo[]> {
    return of([
      {
        name: 'Angular',
        url: '/assets/img/angular.svg'
      },
      {
        name: 'Angular Material',
        url: '/assets/img/angular-material.svg'
      },
      {
        name: 'Tailwind CSS',
        url: '/assets/img/tailwindcss.svg'
      }
    ]);
  }
}
