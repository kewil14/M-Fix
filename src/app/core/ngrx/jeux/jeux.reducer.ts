import { DataStateEnum } from "../../config/data.state.enum";
import { JeuxState } from "./jeux.state";
import { erreurGames, findGameSaas, findGameId, deleteGame, createGame, loadGame, addGame} from './jeux.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { Administrateur } from "../../shared/models/administrateur.modal";
import { findGame } from './jeux.actions';
import { Jeux } from "../../shared/models/jeux.model";

const initState: JeuxState = {
    dataState: DataStateEnum.INITIAL,
    game: {},
    games: [],
    messages: [],
}

// success


const reducer = createReducer(initState,
    
    /**
     * fing game by id
     */
    on(deleteGame, (state, {game}) => {
      let games = [...state.games];
      let list: Array<Jeux> = games.filter((item) => item.id != game.id);
      return {...state, games: list, game: game, dataState: DataStateEnum.SUCCESS, messages: []}
    }),
    /**
     * add game
     */
    on(createGame, (state, {game}) => {
      let games = [...state.games];
      games.push(game);
      return {...state, games: games, game: game, messages: []};
    }),
    /**
     * find all games
     */
    on(loadGame, (state, {games}) => ({...state, games: games, dataState: DataStateEnum.SUCCESS, messages: []})),
    
    /**
     * erreur game state
     */
    on(erreurGames, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages})),

    on( findGameId, findGame, findGameSaas, addGame, state => ({ ...state, dataState: DataStateEnum.LOADING, messages: [] }))
  );
  
  export function jeuxReducer(
    state: JeuxState | undefined,
    action: Action
  ): JeuxState {
    return reducer(state, action);
  }