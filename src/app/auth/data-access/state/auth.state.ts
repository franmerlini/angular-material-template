import { inject } from '@angular/core';

import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';

import { pipe, switchMap, tap } from 'rxjs';

import { tapResponse } from '@ngrx/operators';
import { LocalStorageService, User } from '../../../shared';
import { AuthService } from '../http';

type State = {
  user: User | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
};

const initialState: State = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false
};

export const AuthState = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((state) => {
    const authService = inject(AuthService);
    const localStorageService = inject(LocalStorageService);

    return {
      checkAccessToken(): void {
        const accessToken = localStorageService.getItem('ACCESS_TOKEN');
        patchState(state, { isAuthenticated: !!accessToken });
      },
      login: rxMethod<void>(
        pipe(
          tap(() => patchState(state, { loading: true })),
          switchMap(() => authService.login()),
          tapResponse({
            next: (user) => {
              patchState(state, { user, loading: false, error: null, isAuthenticated: true });
              // localStorageService.setItem('ACCESS_TOKEN', accessToken)
            },
            error: (error: string) => patchState(state, { user: null, loading: false, error, isAuthenticated: false })
          })
        )
      )
    };
  })
);
