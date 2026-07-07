import { Routes } from '@angular/router';

export const SETTING_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./setting.module').then((m) => m.SettingModule),
  },
];
