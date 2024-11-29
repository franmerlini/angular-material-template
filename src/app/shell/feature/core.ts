import { provideHttpClient } from '@angular/common/http';
import {
  EnvironmentProviders,
  provideEnvironmentInitializer,
  Provider,
  provideZoneChangeDetection
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, Routes } from '@angular/router';

export type CoreOptions = {
  routes: Routes;
};

export const provideCore = ({ routes }: CoreOptions): (EnvironmentProviders | Provider)[] => [
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideAnimationsAsync(),
  provideRouter(routes),
  provideHttpClient(),
  provideEnvironmentInitializer(() => {
    // acá lógica de inicialización
  })
];
