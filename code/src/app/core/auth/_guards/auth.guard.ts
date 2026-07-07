// Angular
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
// RxJS
import { tap } from 'rxjs/operators';
// NGRX
import { Store } from '@ngrx/store';
// Auth reducers and selectors
import { AppState } from '../../../core/reducers/';
import { isLoggedIn } from '../_selectors/auth.selectors';

export const authGuardFn: CanActivateFn = (route, state) => {
    const store = inject(Store<AppState>);
    const router = inject(Router);

    return store.select(isLoggedIn).pipe(
        tap(loggedIn => {
            if (!loggedIn) {
                router.navigateByUrl('/auth/login');
            }
        })
    );
};

// Keep class-based guard for backward compatibility during migration
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { select } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class AuthGuard  {
    constructor(private store: Store<AppState>, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
        return this.store
            .pipe(
                select(isLoggedIn),
                tap(loggedIn => {
                    if (!loggedIn) {
                        this.router.navigateByUrl('/auth/login');
                    }
                })
            );
    }
}
