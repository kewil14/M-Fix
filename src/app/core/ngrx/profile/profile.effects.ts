import { TranslateService } from '@ngx-translate/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { UserService } from "../../shared/services/user.service";
import { Injectable } from '@angular/core';
import { erreurProfiles, setUserProfile, setAdministrateurProfile, setSaasUserProfile,
  updateUserProfile, updateAdministrateurProfile, updateSaasUserProfile, checkProfile,
  userNotLogin, checkAdminProfile, checkSaasProfile
} from './profile.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import { User } from '../../shared/models/user.modal';
import {Observable, of} from 'rxjs';
import { ResponseDto } from '../../shared/dto/response-dto.modal';
import { SaasUser } from '../../shared/models/saas-user.modal';
import { Administrateur } from '../../shared/models/administrateur.modal';
import { SaasUserService } from '../../shared/services/saas-user.service';
import { AdministrateurService } from '../../shared/services/administrateur.service';

@Injectable()
export class ProfileEffects {

  updateUserProfile = createEffect(() => this.actions$.pipe(
    ofType(updateUserProfile),
    mergeMap(({user}) => this.parseSetUser(this.userService.updateUser(user)))
  ));

  findUserByToken = createEffect(() => this.actions$.pipe(
    ofType(checkProfile),
    mergeMap(() => this.parseSetLoginUser(this.userService.findByToken()))
  ));


  constructor(private actions$: Actions,
    private translateService: TranslateService,
    private administrateurService: AdministrateurService,
    private saasUserService: SaasUserService,
    private userService: UserService)
  {}

  parseSetSaasUser(obs: Observable<ResponseDto<SaasUser>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<SaasUser>) => {
          if(data.status === 'OK'){
            return setSaasUserProfile({saasUser: data.body || {}})
          } else {
            return erreurProfiles({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurProfiles({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetAdministrateur(obs: Observable<ResponseDto<Administrateur>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Administrateur>) => {
          if(data.status === 'OK'){
            return setAdministrateurProfile({administrateur: data.body || {}})
          } else {
            return erreurProfiles({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurProfiles({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetUser(obs: Observable<ResponseDto<User>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<User>) => {
          if(data.status === 'OK'){
            return setUserProfile({user: data.body || {}})
          } else {
            return erreurProfiles({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurProfiles({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetLoginUser(obs: Observable<ResponseDto<User>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<User>) => {
          if(data.status === 'OK'){
            userNotLogin({isLogin: true})
            return setUserProfile({user: data.body || {}})
          } else {
            userNotLogin({isLogin: false})
            return erreurProfiles({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurProfiles({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }
}
