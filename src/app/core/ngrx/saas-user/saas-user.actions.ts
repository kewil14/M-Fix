import { createAction, props } from "@ngrx/store";
import { SaasUser } from "../../shared/models/saas-user.modal";
import { SaasDto } from "../../shared/dto/saas-dto.modal";

//actions for manage local data
export const erreurSaasUsers = createAction('[SaasUser] authentification/saasUser/erreurs', props<{messages: string[]}>());
export const setSaasUser = createAction('[SaasUser] authentification/saasUser/setSaasUser', props<{ saasUser: SaasUser}>());
export const deleteSaasUser = createAction('[SaasUser] authentification/saasUser/deleteSaasUser', props<{ saasUser: SaasUser }>());
export const addSaasUser = createAction('[SaasUser] authentification/saasUser/addSaasUser', props<{ saasUser: SaasUser}>());
export const loadSaasUser = createAction('[SaasUser] authentification/saasUser/loadSaasUser', props<{ saasUsers: Array<SaasUser>}>());

// actions for manage remote data
export const findSaasUserId = createAction('[SaasUser] authentification/saasUser/findSaasUserId', props<{id: any}>());
export const findSaasUsers = createAction('[SaasUser] authentification/saasUser/findSaasUsers');
export const findByToken = createAction('[SaasUser] authentification/saasUser/findByToken');
export const createSaasUser = createAction('[SaasUser] authentification/saasUser/createSaasUser', props<{ saasDto: SaasDto }>());
export const findSaasUserByIdInstances = createAction('[SaasUser] authentification/saasUser/findSaasUserByIdInstances');
