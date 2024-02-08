import { TranslateService } from '@ngx-translate/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { setInstanceSaas, deleteInstanceSaas, addInstanceSaas, loadInstanceSaas, erreurInstanceSaass,
  getAllInstanceSaas, findInstanceSaasById, validedInstanceSaas, findInstanceSaasByCode,
  updateInstanceSaas, removeInstanceSaas, updateInstanceSaasLogo, createInstanceSaas,
  validedInstanceSaasById
} from './instance-saas.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';

import {Observable, of} from 'rxjs';
import { ResponseDto } from '../../shared/dto/response-dto.modal';
import { InstanceSaas } from "../../shared/models/instance-saas.modal";
import { InstanceSaasService } from '../../shared/services/instance-saas.service';

@Injectable()
export class InstanceSaassEffects {

  updateInstanceSaas = createEffect(() => this.actions$.pipe(
    ofType(updateInstanceSaas),
    mergeMap(({instanceSaas}) => this.parseSetInstanceSaas(this.instanceSaasService.updateInstanceSaas(instanceSaas)))
  ));

  validedInstanceSaas = createEffect(() => this.actions$.pipe(
    ofType(validedInstanceSaas),
    mergeMap(({instanceSaas}) => this.parseSetInstanceSaas(this.instanceSaasService.validedInstanceSaas(instanceSaas)))
  ));

  findInstanceSaasByCode = createEffect(() => this.actions$.pipe(
    ofType(findInstanceSaasByCode),
    mergeMap(({code}) => this.parseSetInstanceSaas(this.instanceSaasService.findInstanceSaasByCode(code)))
  ));

  findInstanceSaasById = createEffect(() => this.actions$.pipe(
    ofType(findInstanceSaasById),
    mergeMap(({id}) => this.parseSetInstanceSaas(this.instanceSaasService.findInstanceSaasById(id)))
  ));

  validedInstanceSaasById = createEffect(() => this.actions$.pipe(
    ofType(validedInstanceSaasById),
    mergeMap(({idInstanceSaas}) => this.parseSetInstanceSaas(this.instanceSaasService.validedInstanceSaasById(idInstanceSaas)))
  ));

  getAllInstanceSaas = createEffect(() => this.actions$.pipe(
    ofType(getAllInstanceSaas),
    mergeMap(() => this.parseLoadInstanceSaas(this.instanceSaasService.getAllInstanceSaas()))
  ));

  removeInstanceSaas = createEffect(() => this.actions$.pipe(
    ofType(removeInstanceSaas),
    mergeMap(({idInstanceSaas}) => this.parseDeleteInstanceSaas(this.instanceSaasService.removeInstanceSaas(idInstanceSaas)))
  ));

  createInstanceSaas = createEffect(() => this.actions$.pipe(
    ofType(createInstanceSaas),
    mergeMap(({instanceSaas}) => this.parseAddInstanceSaas(this.instanceSaasService.createInstanceSaas(instanceSaas)))
  ));

  updateInstanceSaasLogo = createEffect(() => this.actions$.pipe(
    ofType(updateInstanceSaasLogo),
    mergeMap(({idInstanceSaas, file}) => {
      const formdata = new FormData();
      formdata.append('file', file);
      return this.parseSetInstanceSaas(this.instanceSaasService.updateInstanceSaasLogo(idInstanceSaas, formdata))
    })
  ));

  constructor(private actions$: Actions,
    private translateService: TranslateService,
    private instanceSaasService: InstanceSaasService)
  {}

  parseLoadInstanceSaas(obs: Observable<ResponseDto<Array<InstanceSaas>>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Array<InstanceSaas>>) => {
          if(data.status === 'OK'){
            return loadInstanceSaas({instanceSaass: data.body || []})
          } else {
            return erreurInstanceSaass({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurInstanceSaass({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetInstanceSaas(obs: Observable<ResponseDto<InstanceSaas>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<InstanceSaas>) => {
          if(data.status === 'OK'){
            return setInstanceSaas({instanceSaas: data.body || {}})
          } else {
            return erreurInstanceSaass({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurInstanceSaass({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseAddInstanceSaas(obs: Observable<ResponseDto<InstanceSaas>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<InstanceSaas>) => {
          if(data.status === 'OK'){
            return addInstanceSaas({instanceSaas: data.body || {}})
          } else {
            return erreurInstanceSaass({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurInstanceSaass({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseDeleteInstanceSaas(obs: Observable<ResponseDto<InstanceSaas>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<InstanceSaas>) => {
          if(data.status === 'OK'){
            return deleteInstanceSaas({instanceSaas: data.body || {}})
          } else {
            return erreurInstanceSaass({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurInstanceSaass({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

}
