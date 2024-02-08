import { TranslateService } from '@ngx-translate/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {  findGame, findGameId, findGameSaas, addGame, erreurGames, setGame, loadGame, createGame, loadGameSaas} from './jeux.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';

import {Observable, of} from 'rxjs';
import { ResponseDto } from '../../shared/dto/response-dto.modal';
import { JeuxService } from '../../shared/services/jeux.service';
import { Jeux } from '../../shared/models/jeux.model';

@Injectable()
export class GamesEffects {

  findGame = createEffect(() => this.actions$.pipe(
    ofType(findGame),
    mergeMap(() => this.parseLoadGame(this.jeuxService.findAllGame()))
  ));

  findGameId = createEffect(() => this.actions$.pipe(
    ofType(findGameId),
    mergeMap(({id}) => this.parseSetGame(this.jeuxService.findGameById(id)))
  ));

  // findGameSaas = createEffect(() => this.actions$.pipe(
  //   ofType(findGameSaas),
  //   mergeMap(({saas}) => this.parseSetGameSaas(this.jeuxService.findAllGameSaas(saas)))
  // ));

  addGame = createEffect(() => this.actions$.pipe(
    ofType(addGame),
    mergeMap(({game}) => this.parseAddGame(this.jeuxService.addGame(game)))
  ));

  constructor(private actions$: Actions,
    private translateService: TranslateService,
    private jeuxService: JeuxService)
  {}

  parseLoadGame(obs: Observable<ResponseDto<Array<Jeux>>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Array<Jeux>>) => {
          if(data.status === 'OK'){
            return loadGame({games: data.body || []})
          } else {
            return erreurGames({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurGames({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  parseSetGame(obs: Observable<ResponseDto<Jeux>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Jeux>) => {
          if(data.status === 'OK'){
            return setGame({games: data.body || {}})
          } else {
            return erreurGames({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurGames({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

  // parseSetGameSaas(obs: Observable<ResponseDto<Jeux>>) {
  //   return obs.pipe(
  //     map(
  //       (data: ResponseDto<Jeux>) => {
  //         if(data.status === 'OK'){
  //           return loadGameSaas({saas: data.body || {}})
  //         } else {
  //           return erreurGames({messages: data.messages || []})
  //         }
  //       }
  //     ), catchError(() => of(erreurGames({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
  //   )
  // }

  parseAddGame(obs: Observable<ResponseDto<Jeux>>) {
    return obs.pipe(
      map(
        (data: ResponseDto<Jeux>) => {
          if(data.status === 'OK'){
            return createGame({game: data.body || {}})
          } else {
            return erreurGames({messages: data.messages || []})
          }
        }
      ), catchError(() => of(erreurGames({messages: [this.translateService.instant('MESSAGES.ERRORS.LOAD')]})))
    )
  }

}
