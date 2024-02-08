import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { findRoleById } from '../../ngrx/role/role.actions';

@Injectable({ providedIn: 'root' })
export class CheckRoleGuard implements CanActivate {
    constructor(
        private localStorageService: LocalStorageService,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(!this.localStorageService.isTokenExpired() && route.paramMap.get('idRole') as any != 0) {
            // rechercher un role par son id
            
            // this.storeService.dispatch(findRoleById({ idRole: route.paramMap.get('idRole') }));
            return true;
        } else {
            return true;
        }
    }
}
