import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { materialProviders } from './shared/material.module';

export const appConfig: ApplicationConfig = {

  providers: [
    materialProviders,
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]

};
