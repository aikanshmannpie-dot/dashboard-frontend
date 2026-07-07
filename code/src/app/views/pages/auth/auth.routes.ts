import { Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects, authReducer, AuthService } from '../../../core/auth';

// Auth routes - loaded via loadChildren in app.routes.ts
// Uses the existing AuthModule for now (it has its own child router)
export const AUTH_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./auth.module').then((m) => m.AuthModule),
  },
];
