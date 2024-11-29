import { ApplicationConfig } from '@angular/core';

import { provideCore, routes } from './shell';

export const appConfig: ApplicationConfig = {
  providers: [provideCore({ routes })]
};
