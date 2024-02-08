import { createAction, props } from "@ngrx/store";
import { Jeux } from "../../shared/models/jeux.model";
import { InstanceSaas } from "../../shared/models/instance-saas.modal";

//actions for manage local data
export const erreurGames = createAction('[Jeux] game/erreurs', props<{messages: string[]}>());
export const setGame = createAction('[Jeux] game/setGame', props<{ games: Jeux}>());
export const deleteGame = createAction('[Jeux] game/deleteGame', props<{ game: Jeux }>());
export const createGame= createAction('[Jeux] game/addGame', props<{ game: Jeux}>());
export const loadGame= createAction('[Jeux] game/loadGame', props<{ games: Array<Jeux>}>());
export const loadGameSaas = createAction('[Jeux] game/loadGame', props<{ saas: Array<InstanceSaas>}>());

// actions for manage remote data
export const findGameId = createAction('[Jeux] game/findGameId', props<{id: any}>());
export const findGame= createAction('[Jeux] game/findGames');
export const findGameSaas= createAction('[Jeux] game/findGameSaas', props<{saas: InstanceSaas}>());
export const addGame = createAction('[Jeux] game/addAGame', props<{ game: Jeux}>());
