import { TranslateService } from '@ngx-translate/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { RoleService } from "../../shared/services/role.service";
import { Injectable } from '@angular/core';
import { setRole, deleteRole, addRole, loadRole, erreurRoles,
    setRoleItem, deleteRoleItem, addRoleItem, loadRoleItem,
    findAllRoleItem, findAllRoleItemByType, findRoleByUser,
    updateRoleItem, findAllRoles, findRoleByIdRef, findRoleByType,
    findRoleById, createRoleAdmin, updateRole, getRoleItemByGroup, loadRoleByGroup
} from './role.actions';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';

import {Observable, of} from 'rxjs';
import { ResponseDto } from '../../shared/dto/response-dto.modal';
import { Store } from '@ngrx/store';
import { Role } from '../../shared/models/role.module';
import { RoleItem } from '../../shared/models/role-item.module';
import { GroupRoleItemDto } from '../../shared/dto/group-role-item-dto.modal';

@Injectable()
export class RolesEffects {

  updateRole = createEffect(() => this.actions$.pipe(
    ofType(updateRole),
    mergeMap(({role}) => this.parseSetRole(this.roleService.updateRole(role)))
  ));

  createRoleAdmin = createEffect(() => this.actions$.pipe(
    ofType(createRoleAdmin),
    mergeMap(({role}) => this.parseAddRole(this.roleService.createRoleAdmin(role)))
  ));

  updateRoleItem = createEffect(() => this.actions$.pipe(
    ofType(updateRoleItem),
    mergeMap(({item}) => this.parseSetRoleItem(this.roleService.updateRoleItem(item)))
  ));

  findAllRoleItem = createEffect(() => this.actions$.pipe(
    ofType(findAllRoleItem),
    mergeMap(() => this.parseLoadRoleItem(this.roleService.findAllRoleItem()))
  ));

  findAllRoles = createEffect(() => this.actions$.pipe(
    ofType(findAllRoles),
    mergeMap(() => this.parseLoadRole(this.roleService.findAllRoles()))
  ));

  findRoleByIdRef = createEffect(() => this.actions$.pipe(
    ofType(findRoleByIdRef),
    mergeMap(({idRef}) => this.parseLoadRole(this.roleService.findRoleByIdRef(idRef)))
  ));

  findRoleByType = createEffect(() => this.actions$.pipe(
    ofType(findRoleByType),
    mergeMap(({typeRole}) => this.parseLoadRole(this.roleService.findRoleByType(typeRole)))
  ));

  findAllRoleItemByType = createEffect(() => this.actions$.pipe(
    ofType(findAllRoleItemByType),
    mergeMap(({typeRole}) => this.parseLoadRoleItem(this.roleService.findAllRoleItemByType(typeRole)))
  ));

  findRoleByUser = createEffect(() => this.actions$.pipe(
    ofType(findRoleByUser),
    mergeMap(({idUser}) => this.parseLoadRoleItem(this.roleService.findRoleByUser(idUser)))
  ));

  findRoleById = createEffect(() => this.actions$.pipe(
    ofType(findRoleById),
    mergeMap(({idRole}) => this.parseSetRole(this.roleService.findRoleById(idRole)))
  ));

  getRoleItemByGroup = createEffect(() => this.actions$.pipe(
    ofType(getRoleItemByGroup),
    mergeMap(() => this.parseLoadGroupRole(this.roleService.getRoleItemByGroup()))
  ));

  constructor(private actions$: Actions,
    private translateService: TranslateService,
    private storeService: Store,
    private roleService: RoleService)
  {}

  parseLoadRole(obs: Observable<ResponseDto<Array<Role>>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Array<Role>>) => {
          if(data.status === 'OK'){
            return loadRole({roles: data.body || []})
          } else {
            return erreurRoles({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurRoles({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseLoadGroupRole(obs: Observable<ResponseDto<Array<GroupRoleItemDto>>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Array<GroupRoleItemDto>>) => {
          if(data.status === 'OK'){
            return loadRoleByGroup({groupRoles: data.body || []})
          } else {
            return erreurRoles({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurRoles({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetRole(obs: Observable<ResponseDto<Role>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Role>) => {
          if(data.status === 'OK'){
            return setRole({role: data.body || {}})
          } else {
            return erreurRoles({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurRoles({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseAddRole(obs: Observable<ResponseDto<Role>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Role>) => {
          if(data.status === 'OK'){
            return addRole({role: data.body || {}})
          } else {
            return erreurRoles({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurRoles({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseDeleteRole(obs: Observable<ResponseDto<Role>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Role>) => {
          if(data.status === 'OK'){
            return deleteRole({role: data.body || {}})
          } else {
            return erreurRoles({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurRoles({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseLoadRoleItem(obs: Observable<ResponseDto<Array<RoleItem>>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Array<RoleItem>>) => {
          if(data.status === 'OK'){
            return loadRoleItem({roleItems: data.body || []})
          } else {
            return erreurRoles({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurRoles({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetRoleItem(obs: Observable<ResponseDto<RoleItem>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<RoleItem>) => {
          if(data.status === 'OK'){
            return setRoleItem({roleItem: data.body || {}})
          } else {
            return erreurRoles({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurRoles({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseAddRoleItem(obs: Observable<ResponseDto<RoleItem>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<RoleItem>) => {
          if(data.status === 'OK'){
            return addRoleItem({roleItem: data.body || {}})
          } else {
            return erreurRoles({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurRoles({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseDeleteRoleItem(obs: Observable<ResponseDto<RoleItem>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<RoleItem>) => {
          if(data.status === 'OK'){
            return deleteRoleItem({roleItem: data.body || {}})
          } else {
            return erreurRoles({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurRoles({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }
}
