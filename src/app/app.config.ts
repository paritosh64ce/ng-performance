import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { NoPreloading, PreloadAllModules, provideRouter, withHashLocation, withPreloading, withRouterConfig } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,
      withHashLocation(),
      withPreloading(NoPreloading)
      // withPreloading(PreloadAllModules)
    ),
    provideHttpClient(),
    provideAnimations()
  ]
};

export const ModulesToImport = [
  CommonModule, MatInputModule, FormsModule, MatCardModule, MatButtonModule
];