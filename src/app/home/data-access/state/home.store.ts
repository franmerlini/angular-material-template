import { inject } from '@angular/core';

import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';

import { pipe, switchMap } from 'rxjs';

import { Logo } from '../../domain';
import { LogoService } from '../http';

type State = {
  logos: Logo[];
};

const initialState: State = {
  logos: []
};

export const HomeStore = signalStore(
  withState(initialState),
  withMethods((state) => {
    const logoService = inject(LogoService);
    return {
      loadLogos: rxMethod<void>(
        pipe(
          switchMap(() => logoService.getLogos()),
          tapResponse(
            (logos) => patchState(state, { logos }),
            (error) => console.error(error)
          )
        )
      )
    };
  }),
  withHooks({
    onInit(store) {
      store.loadLogos();
    }
  })
);
