import { TranslateService } from '@ngx-translate/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { AdministrateurService } from "../../shared/services/administrateur.service";
import { Injectable } from '@angular/core';
import { setAdministrateur, deleteAdministrateur, addAdministrateur, loadAdministrateur, erreurAdministrateurs,
  findAdministrateurId, findAdministrateurs, findByToken, createAdministrateur
} from './administrateur.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';

import {Observable, of} from 'rxjs';
import { ResponseDto } from '../../shared/dto/response-dto.modal';
import { Administrateur } from '../../shared/models/administrateur.modal';

@Injectable()
export class AdministrateursEffects {

  findAdministrateurs = createEffect(() => this.actions$.pipe(
    ofType(findAdministrateurs),
    mergeMap(() => this.parseLoadAdministrateur(this.administrateurService.findAdministrateurs()))
  ));

  findAdministrateurId = createEffect(() => this.actions$.pipe(
    ofType(findAdministrateurId),
    mergeMap(({id}) => this.parseSetAdministrateur(this.administrateurService.findAdministrateurId(id)))
  ));

  findByToken = createEffect(() => this.actions$.pipe(
    ofType(findByToken),
    mergeMap(() => this.parseSetAdministrateur(this.administrateurService.findByToken()))
  ));

  createAdministrateur = createEffect(() => this.actions$.pipe(
    ofType(createAdministrateur),
    mergeMap(({administrateur, idRole}) => this.parseAddAdministrateur(this.administrateurService.createAdministrateur(idRole, administrateur)))
  ));

  constructor(private actions$: Actions,
    private translateService: TranslateService,
    private administrateurService: AdministrateurService)
  {}

  parseLoadAdministrateur(obs: Observable<ResponseDto<Array<Administrateur>>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Array<Administrateur>>) => {
          if(data.status === 'OK'){
            return loadAdministrateur({administrateurs: data.body || []})
          } else {
            return erreurAdministrateurs({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurAdministrateurs({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetAdministrateur(obs: Observable<ResponseDto<Administrateur>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Administrateur>) => {
          if(data.status === 'OK'){
            return setAdministrateur({administrateur: data.body || {}})
          } else {
            return erreurAdministrateurs({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurAdministrateurs({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseAddAdministrateur(obs: Observable<ResponseDto<Administrateur>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Administrateur>) => {
          if(data.status === 'OK'){
            return addAdministrateur({administrateur: data.body || {}})
          } else {
            return erreurAdministrateurs({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurAdministrateurs({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseDeleteAdministrateur(obs: Observable<ResponseDto<Administrateur>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Administrateur>) => {
          if(data.status === 'OK'){
            return deleteAdministrateur({administrateur: data.body || {}})
          } else {
            return erreurAdministrateurs({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurAdministrateurs({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

}
