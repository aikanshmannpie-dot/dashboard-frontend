import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore } from '@ngrx/router-store';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPermissionsModule } from 'ngx-permissions';

import { routes } from './app.routes';
import { reducers, metaReducers } from './core/reducers';
import { authInterceptor } from './auth.interceptor';
import { environment } from '../environments/environment';
import { APP_INITIALIZER } from '@angular/core';
// Layout Services
import {
  DataTableService,
  LayoutConfigService,
  LayoutRefService,
  MenuAsideService,
  MenuConfigService,
  MenuHorizontalService,
  PageConfigService,
  SplashScreenService,
  SubheaderService,
  KtDialogService,
} from './core/_base/layout';

// CRUD
import {
  HttpUtilsService,
  LayoutUtilsService,
  TypesUtilsService,
} from './core/_base/crud';

// Auth
import { AuthService, SupplierService, authReducer, AuthEffects, AuthGuard } from './core/auth';

import { ThemeModule } from './views/theme/theme.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Config
import { LayoutConfig } from './core/_config/layout.config';

function initializeLayoutConfig(appConfig: LayoutConfigService) {
  return () => {
    if (appConfig.getConfig() === null) {
      appConfig.loadConfigs(new LayoutConfig().configs);
    }
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimationsAsync(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: environment.production,
    }),
    provideRouterStore(),
    importProvidersFrom(
      StoreModule.forRoot({ ...reducers, auth: authReducer }, { metaReducers: metaReducers as any }),
      EffectsModule.forRoot([AuthEffects]),
      TranslateModule.forRoot(),
      NgxPermissionsModule.forRoot(),
      ThemeModule,
    ),
    // Layout services
    AuthService,
    AuthGuard,
    SupplierService,
    LayoutConfigService,
    LayoutRefService,
    MenuConfigService,
    PageConfigService,
    KtDialogService,
    DataTableService,
    SplashScreenService,
    SubheaderService,
    MenuHorizontalService,
    MenuAsideService,
    HttpUtilsService,
    TypesUtilsService,
    LayoutUtilsService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeLayoutConfig,
      deps: [LayoutConfigService],
      multi: true,
    },
  ],
};
