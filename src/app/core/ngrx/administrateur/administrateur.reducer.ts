import { DataStateEnum } from "../../config/data.state.enum";
import { AdministrateurState } from "./administrateur.state";
import { setAdministrateur, deleteAdministrateur, addAdministrateur, loadAdministrateur, erreurAdministrateurs,
  findAdministrateurId, findAdministrateurs, findByToken, createAdministrateur
} from './administrateur.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { Administrateur } from "../../shared/models/administrateur.modal";

const initState: AdministrateurState = {
    dataState: DataStateEnum.INITIAL,
    administrateur: {},
    administrateurs: [],
    messages: [],
}

const reducer = createReducer(initState,
    on(setAdministrateur, (state, {administrateur}) => {
      let administrateurs = [...state.administrateurs];
      let list: Array<Administrateur> = administrateurs.filter((item) => item.id != administrateur.id);
      list.push(administrateur)
      return {...state, administrateurs: list, administrateur: administrateur, dataState: DataStateEnum.SUCCESS, messages: []}
    }),
    on(deleteAdministrateur, (state, {administrateur}) => {
      let administrateurs = [...state.administrateurs];
      let list: Array<Administrateur> = administrateurs.filter((item) => item.id != administrateur.id);
      return {...state, administrateurs: list, administrateur: administrateur, dataState: DataStateEnum.SUCCESS, messages: []}
    }),
    on(addAdministrateur, (state, {administrateur}) => {
      let administrateurs = [...state.administrateurs];
      administrateurs.push(administrateur);
      return {...state, administrateurs: administrateurs, administrateur: administrateur, messages: []};
    }),
    on(loadAdministrateur, (state, {administrateurs}) => ({...state, administrateurs: administrateurs, dataState: DataStateEnum.SUCCESS, messages: []})),
    on(erreurAdministrateurs, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages})),

    on( findAdministrateurId, findAdministrateurs, findByToken, createAdministrateur, state => ({ ...state, dataState: DataStateEnum.LOADING, messages: [] }))
  );
  
  export function administrateursReducer(
    state: AdministrateurState | undefined,
    action: Action
  ): AdministrateurState {
    return reducer(state, action);
  }