import { TranslateService } from '@ngx-translate/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { SaasUserService } from "../../shared/services/saas-user.service";
import { Injectable } from '@angular/core';
import { setSaasUser, deleteSaasUser, addSaasUser, loadSaasUser, erreurSaasUsers,
  findSaasUserId, findSaasUsers, findByToken, createSaasUser, findSaasUserByIdInstances
} from './saas-user.actions';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';

import {Observable, of} from 'rxjs';
import { ResponseDto } from '../../shared/dto/response-dto.modal';
import { SaasUser } from '../../shared/models/saas-user.modal';
import { SaasDto } from '../../shared/dto/saas-dto.modal';
import { Store } from '@ngrx/store';
import { selectProfileState, selectSaasUserState } from '../../core.state';

@Injectable()
export class SaasUsersEffects {

  findSaasUsers = createEffect(() => this.actions$.pipe(
    ofType(findSaasUsers),
    mergeMap(() => this.parseLoadSaasUser(this.saasUserService.findSaasUsers()))
  ));

  findSaasUserId = createEffect(() => this.actions$.pipe(
    ofType(findSaasUserId),
    mergeMap(({id}) => this.parseSetSaasUser(this.saasUserService.findSaasUserId(id)))
  ));

  findByToken = createEffect(() => this.actions$.pipe(
    ofType(findByToken),
    mergeMap(() => this.parseSetSaasUser(this.saasUserService.findByToken()))
  ));

  createSaasUser = createEffect(() => this.actions$.pipe(
    ofType(createSaasUser),
    mergeMap(({saasDto}) => this.parseAddSaasUserDto(this.saasUserService.createSaasUser(saasDto)))
  ));

  findSaasUserByIdInstances = createEffect(() => this.actions$.pipe(
    ofType(findSaasUserByIdInstances),
    withLatestFrom(this.storeService.select(selectProfileState)),
    mergeMap(([_, {saasUser}]) => this.parseLoadSaasUser(this.saasUserService.findSaasUserByIdInstances(saasUser.id)))
  ));

  constructor(private actions$: Actions,
    private translateService: TranslateService,
    private storeService: Store,
    private saasUserService: SaasUserService)
  {}

  parseLoadSaasUser(obs: Observable<ResponseDto<Array<SaasUser>>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Array<SaasUser>>) => {
          if(data.status === 'OK'){
            return loadSaasUser({saasUsers: data.body || []})
          } else {
            return erreurSaasUsers({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurSaasUsers({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetSaasUser(obs: Observable<ResponseDto<SaasUser>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<SaasUser>) => {
          if(data.status === 'OK'){
            return setSaasUser({saasUser: data.body || {}})
          } else {
            return erreurSaasUsers({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurSaasUsers({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseAddSaasUser(obs: Observable<ResponseDto<SaasUser>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<SaasUser>) => {
          if(data.status === 'OK'){
            return addSaasUser({saasUser: data.body || {}})
          } else {
            return erreurSaasUsers({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurSaasUsers({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseAddSaasUserDto(obs: Observable<ResponseDto<SaasDto>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<SaasDto>) => {
          if(data.status === 'OK'){
            return addSaasUser({saasUser: data.body?.saasUser || {}})
          } else {
            return erreurSaasUsers({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurSaasUsers({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseDeleteSaasUser(obs: Observable<ResponseDto<SaasUser>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<SaasUser>) => {
          if(data.status === 'OK'){
            return deleteSaasUser({saasUser: data.body || {}})
          } else {
            return erreurSaasUsers({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurSaasUsers({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

}
