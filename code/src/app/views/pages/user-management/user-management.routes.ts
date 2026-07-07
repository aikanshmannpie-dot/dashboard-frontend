import { Routes } from '@angular/router';

export const USER_MANAGEMENT_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./user-management.module').then((m) => m.UserManagementModule),
  },
];
