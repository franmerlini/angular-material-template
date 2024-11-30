import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '../../../shared';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  #http = inject(HttpClient);
  #baseUrl = 'auth';

  login(): Observable<User> {
    return this.#http.post<User>(`${this.#baseUrl}/login`, {});
  }

  logout(): Observable<void> {
    return this.#http.post<void>(`${this.#baseUrl}/logout`, {});
  }
}
