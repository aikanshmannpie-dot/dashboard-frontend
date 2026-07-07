// NGRX
import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../../environments/environment';

export interface AppState { }

export const reducers: ActionReducerMap<AppState> = { router: routerReducer };

// ngrx-store-freeze is no longer needed — NgRx 9+ has built-in
// strictStateImmutability and strictActionImmutability runtime checks
export const metaReducers: Array<MetaReducer<AppState>> = !environment.production ? [] : [];
