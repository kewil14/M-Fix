import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { Store } from '@ngrx/store';
import { checkProfile } from '../../ngrx/profile/profile.actions';

/**
 * le CheckUserGuard n'as pas pour objectif de bloqué le route mais de charge l'utilisateur connecter
 */
@Injectable({ providedIn: 'root' })
export class CheckUserGuard implements CanActivate {
    constructor(
        private localStorageService: LocalStorageService,
        private storeService: Store
    ) {
    }

    // tslint:disable-next-line: typedef
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(!this.localStorageService.isTokenExpired()) {
            this.storeService.dispatch(checkProfile());
        }
        // ont retourne toujours true pour ne pas bloqué le route
        return true;
    }
}
