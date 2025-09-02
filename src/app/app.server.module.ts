import { importProvidersFrom } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { appConfig } from './app.config';

export const AppServerProviders = [
  importProvidersFrom(ServerModule),
  ...appConfig.providers
];