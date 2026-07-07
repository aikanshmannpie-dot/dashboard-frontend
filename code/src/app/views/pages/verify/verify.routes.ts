import { Routes } from '@angular/router';

export const VERIFY_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./verify.module').then((m) => m.VerifyModule),
  },
];
