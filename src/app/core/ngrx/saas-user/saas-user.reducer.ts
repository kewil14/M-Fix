import { DataStateEnum } from "../../config/data.state.enum";
import { SaasUserState } from "./saas-user.state";
import { setSaasUser, deleteSaasUser, addSaasUser, loadSaasUser, erreurSaasUsers,
  findSaasUserId, findSaasUsers, findByToken, createSaasUser, findSaasUserByIdInstances
} from './saas-user.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { SaasUser } from "../../shared/models/saas-user.modal";

const initState: SaasUserState = {
    dataState: DataStateEnum.INITIAL,
    saasUser: {},
    saasUsers: [],
    messages: [],
}

const reducer = createReducer(initState,
    on(setSaasUser, (state, {saasUser}) => {
      let saasUsers = [...state.saasUsers];
      let list: Array<SaasUser> = saasUsers.filter((item) => item.id != saasUser.id);
      list.push(saasUser)
      return {...state, saasUsers: list, saasUser: saasUser, dataState: DataStateEnum.SUCCESS, messages: []}
    }),
    on(deleteSaasUser, (state, {saasUser}) => {
      let saasUsers = [...state.saasUsers];
      let list: Array<SaasUser> = saasUsers.filter((item) => item.id != saasUser.id);
      return {...state, saasUsers: list, saasUser: saasUser, dataState: DataStateEnum.SUCCESS, messages: []}
    }),
    on(addSaasUser, (state, {saasUser}) => {
      let saasUsers = [...state.saasUsers];
      saasUsers.push(saasUser);
      return {...state, saasUsers: saasUsers, saasUser: saasUser, messages: []};
    }),
    on(loadSaasUser, (state, {saasUsers}) => ({...state, saasUsers: saasUsers, dataState: DataStateEnum.SUCCESS, messages: []})),
    on(erreurSaasUsers, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages})),

    on( findSaasUserId, findSaasUsers, findByToken, createSaasUser, findSaasUserByIdInstances, state => ({ ...state, dataState: DataStateEnum.LOADING, messages: [] }))
  );
  
  export function saasUsersReducer(
    state: SaasUserState | undefined,
    action: Action
  ): SaasUserState {
    return reducer(state, action);
  }