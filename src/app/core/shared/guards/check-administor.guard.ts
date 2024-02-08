import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { Store } from '@ngrx/store';
import { checkProfile, setAdministrateurProfile, setUserProfile } from '../../ngrx/profile/profile.actions';

import { AdministrateurService } from '../services/administrateur.service';
import { catchError, map, of } from 'rxjs';
import { ResponseDto } from '../dto/response-dto.modal';
import { Administrateur } from '../models/administrateur.modal';
import { ListRoles } from '../../config/list-roles';

@Injectable({ providedIn: 'root' })
export class CheckAdministratorGuard implements CanActivate {
    constructor(
        private localStorageService: LocalStorageService,
        private storeService: Store,
        private administrateurService: AdministrateurService,
        private router: Router
    ) {
    }

    // tslint:disable-next-line: typedef
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.localStorageService.isTokenExpired() && this.localStorageService.hasRole([ListRoles.ROLE_USER])) {
            return this.administrateurService.findByToken().pipe(
                map((data: ResponseDto<Administrateur>) => {
                    if(data.status == 'OK') {
                        this.storeService.dispatch(setAdministrateurProfile({administrateur: data.body || {}}));
                        this.storeService.dispatch(setUserProfile({user: data.body?.user || {}}));
                        return true;
                    } else {
                        this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
                        return false;
                    }
                }),
                catchError(() => {
                    this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
                    return of(false);
                })
            )
        } else {
            this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
              return false;
        }
    }
}

