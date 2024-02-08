import { TranslateService } from '@ngx-translate/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { UserService } from "../../shared/services/user.service";
import { Injectable } from '@angular/core';
import { setUser, deleteUser, addUser, loadUser, erreurUsers,
  findUsers, findUserByUsername, getAllUsers, findUserId,
  findByToken, resetPasswordUser, updateUser, updatePhotoUser
} from './user.actions';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';

import {Observable, of} from 'rxjs';
import { ResponseDto } from '../../shared/dto/response-dto.modal';
import { User } from '../../shared/models/user.modal';

@Injectable()
export class UsersEffects {

  updateUser = createEffect(() => this.actions$.pipe(
    ofType(updateUser),
    mergeMap(({user}) => this.parseSetUser(this.userService.updateUser(user)))
  ));

  findUsers = createEffect(() => this.actions$.pipe(
    ofType(findUsers),
    mergeMap(() => this.parseLoadUser(this.userService.findUsers()))
  ));

  getAllUsers = createEffect(() => this.actions$.pipe(
    ofType(getAllUsers),
    mergeMap(() => this.parseLoadUser(this.userService.getAllUsers()))
  ));

  findUserId = createEffect(() => this.actions$.pipe(
    ofType(findUserId),
    mergeMap(({id}) => this.parseSetUser(this.userService.findUserId(id)))
  ));

  findUserByUsername = createEffect(() => this.actions$.pipe(
    ofType(findUserByUsername),
    mergeMap(({username}) => this.parseSetUser(this.userService.findUserByUsername(username)))
  ));

  findByToken = createEffect(() => this.actions$.pipe(
    ofType(findByToken),
    mergeMap(() => this.parseSetUser(this.userService.findByToken()))
  ));

  resetPasswordUser = createEffect(() => this.actions$.pipe(
    ofType(resetPasswordUser),
    mergeMap(({user}) => this.parseSetUser(this.userService.resetPasswordUser(user)))
  ));

  updatePhotoUser = createEffect(() => this.actions$.pipe(
    ofType(updatePhotoUser),
    mergeMap(({user, file}) => {
      const formdata = new FormData();
      formdata.append('file', file);
      return this.parseSetUser(this.userService.updatePhotoUser(user.id, formdata))
    })
  ));

  constructor(private actions$: Actions,
    private translateService: TranslateService,
    private userService: UserService)
  {}

  parseLoadUser(obs: Observable<ResponseDto<Array<User>>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Array<User>>) => {
          if(data.status === 'OK'){
            return loadUser({users: data.body || []})
          } else {
            return erreurUsers({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurUsers({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetUser(obs: Observable<ResponseDto<User>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<User>) => {
          if(data.status === 'OK'){
            return setUser({user: data.body || {}})
          } else {
            return erreurUsers({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurUsers({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseAddUser(obs: Observable<ResponseDto<User>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<User>) => {
          if(data.status === 'OK'){
            return addUser({user: data.body || {}})
          } else {
            return erreurUsers({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurUsers({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseDeleteUser(obs: Observable<ResponseDto<User>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<User>) => {
          if(data.status === 'OK'){
            return deleteUser({user: data.body || {}})
          } else {
            return erreurUsers({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurUsers({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

}
