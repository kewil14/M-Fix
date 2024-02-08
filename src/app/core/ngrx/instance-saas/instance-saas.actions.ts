import { createAction, props } from "@ngrx/store";
import { InstanceSaas } from "../../shared/models/instance-saas.modal";

//actions for manage local data
export const erreurInstanceSaass = createAction('[InstanceSaas] instance/instanceSaas/erreurs', props<{messages: string[]}>());
export const setInstanceSaas = createAction('[InstanceSaas] instance/instanceSaas/setInstanceSaas', props<{ instanceSaas: InstanceSaas}>());
export const deleteInstanceSaas = createAction('[InstanceSaas] instance/instanceSaas/deleteInstanceSaas', props<{ instanceSaas: InstanceSaas }>());
export const addInstanceSaas = createAction('[InstanceSaas] instance/instanceSaas/addInstanceSaas', props<{ instanceSaas: InstanceSaas}>());
export const loadInstanceSaas = createAction('[InstanceSaas] instance/instanceSaas/loadInstanceSaas', props<{ instanceSaass: Array<InstanceSaas>}>());

// actions for manage remote data
export const getAllInstanceSaas = createAction('[InstanceSaas] instance/instanceSaas/getAllInstanceSaas');
export const findInstanceSaasById = createAction('[InstanceSaas] instance/instanceSaas/findInstanceSaasById', props<{id: any}>());
export const validedInstanceSaas = createAction('[InstanceSaas] instance/instanceSaas/validedInstanceSaas', props<{instanceSaas: InstanceSaas}>());
export const findInstanceSaasByCode = createAction('[InstanceSaas] instance/instanceSaas/findInstanceSaasByCode', props<{code: any}>());
export const updateInstanceSaas = createAction('[InstanceSaas] instance/instanceSaas/updateInstanceSaas', props<{instanceSaas: InstanceSaas}>());
export const removeInstanceSaas = createAction('[InstanceSaas] instance/instanceSaas/removeInstanceSaas', props<{idInstanceSaas: any}>());
export const updateInstanceSaasLogo = createAction('[InstanceSaas] instance/instanceSaas/updateInstanceSaasLogo', props<{idInstanceSaas: any, file: File }>());
export const createInstanceSaas = createAction('[InstanceSaas] instance/instanceSaas/createInstanceSaas', props<{ instanceSaas: InstanceSaas }>());
export const validedInstanceSaasById = createAction('[InstanceSaas] instance/instanceSaas/validedInstanceSaasById', props<{idInstanceSaas: any}>());
