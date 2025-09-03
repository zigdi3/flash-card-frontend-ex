import { environment } from 'src/environments/environment';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import routes from './app.routes';

export class APP_CONFIG {
  // Base URL
  // static APP_VERSION: string = environment.AppVersion;
  static API_SERVER: string = environment.apiURL;
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi()),
  ],
};
