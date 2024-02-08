import { DataStateEnum } from "../../config/data.state.enum";
import { InstanceSaasState } from "./instance-saas.state";
import { setInstanceSaas, deleteInstanceSaas, addInstanceSaas, loadInstanceSaas, erreurInstanceSaass,
  getAllInstanceSaas, findInstanceSaasById, validedInstanceSaas, findInstanceSaasByCode,
  updateInstanceSaas, removeInstanceSaas, updateInstanceSaasLogo, createInstanceSaas,
  validedInstanceSaasById
} from './instance-saas.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { InstanceSaas } from "../../shared/models/instance-saas.modal";

const initState: InstanceSaasState = {
    dataState: DataStateEnum.INITIAL,
    instanceSaas: {},
    instanceSaass: [],
    messages: [],
}

const reducer = createReducer(initState,
    on(setInstanceSaas, (state, {instanceSaas}) => {
      let instanceSaass = [...state.instanceSaass];
      let list: Array<InstanceSaas> = instanceSaass.filter((item) => item.id != instanceSaas.id);
      list.push(instanceSaas)
      return {...state, instanceSaass: list, instanceSaas: instanceSaas, dataState: DataStateEnum.SUCCESS, messages: []}
    }),
    on(deleteInstanceSaas, (state, {instanceSaas}) => {
      let instanceSaass = [...state.instanceSaass];
      let list: Array<InstanceSaas> = instanceSaass.filter((item) => item.id != instanceSaas.id);
      return {...state, instanceSaass: list, instanceSaas: instanceSaas, dataState: DataStateEnum.SUCCESS, messages: []}
    }),
    on(addInstanceSaas, (state, {instanceSaas}) => {
      let instanceSaass = [...state.instanceSaass];
      instanceSaass.push(instanceSaas);
      return {...state, instanceSaass: instanceSaass, instanceSaas: instanceSaas, messages: []};
    }),
    on(loadInstanceSaas, (state, {instanceSaass}) => ({...state, instanceSaass: instanceSaass, dataState: DataStateEnum.SUCCESS, messages: []})),
    on(erreurInstanceSaass, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages})),

    on( getAllInstanceSaas, findInstanceSaasById, validedInstanceSaas, findInstanceSaasByCode,
      updateInstanceSaas, removeInstanceSaas, updateInstanceSaasLogo, createInstanceSaas,
      validedInstanceSaasById, state => ({ ...state, dataState: DataStateEnum.LOADING, messages: [] }))
  );
  
  export function instanceSaassReducer(
    state: InstanceSaasState | undefined,
    action: Action
  ): InstanceSaasState {
    return reducer(state, action);
  }