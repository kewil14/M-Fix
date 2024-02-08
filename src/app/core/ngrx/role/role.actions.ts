import { createAction, props } from "@ngrx/store";
import { RoleItem } from "../../shared/models/role-item.module";
import { Role } from "../../shared/models/role.module";
import { GroupRoleItemDto } from "../../shared/dto/group-role-item-dto.modal";

//actions for manage local data
export const erreurRoles = createAction('[Role] authentification/role/erreurs', props<{messages: string[]}>());

export const setRole = createAction('[Role] authentification/role/setRole', props<{ role: Role}>());
export const deleteRole = createAction('[Role] authentification/role/deleteRole', props<{ role: Role }>());
export const addRole = createAction('[Role] authentification/role/addRole', props<{ role: Role}>());
export const loadRole = createAction('[Role] authentification/role/loadRole', props<{ roles: Array<Role>}>());

export const loadRoleByGroup = createAction('[Role] authentification/role/loadRoleByGroup', props<{ groupRoles: Array<GroupRoleItemDto>}>());

export const setRoleItem = createAction('[Role] authentification/role/setRoleItem', props<{ roleItem: RoleItem}>());
export const deleteRoleItem = createAction('[Role] authentification/role/deleteRoleItem', props<{ roleItem: RoleItem }>());
export const addRoleItem = createAction('[Role] authentification/role/addRoleItem', props<{ roleItem: RoleItem}>());
export const loadRoleItem = createAction('[Role] authentification/role/loadRoleItem', props<{ roleItems: Array<RoleItem>}>());

// tous les roles item de l appli
export const findAllRoleItem = createAction('[Role] authentification/role/findAllRoleItem');

//tous les roles item par type
export const findAllRoleItemByType = createAction('[Role] authentification/role/findAllRoleItemByType', props<{typeRole: any}>());

//tous les roles d'un user
export const findRoleByUser = createAction('[Role] authentification/role/findRoleByUser', props<{idUser: any}>());

//mettre a jour le role item
export const updateRoleItem = createAction('[Role] authentification/role/updateRoleItem', props<{item: RoleItem}>());

//tous les role de l'appli
export const findAllRoles = createAction('[Role] authentification/role/findAllRoles');

//tous les role de l'appli par id ref
export const findRoleByIdRef = createAction('[Role] authentification/role/findRoleByIdRef', props<{idRef: any}>());

//tous les roles par type
export const findRoleByType = createAction('[Role] authentification/role/findRoleByType', props<{typeRole: any}>());

//tous les roles par id
export const findRoleById = createAction('[Role] authentification/role/idRole', props<{idRole: any}>());

//creation role admin dans le systeme
export const createRoleAdmin = createAction('[Role] authentification/role/createRoleAdmin', props<{role: Role}>());

//mettre a jour un role dans le systeme
export const updateRole = createAction('[Role] authentification/role/updateRole', props<{role: Role}>());

export const getRoleItemByGroup = createAction('[Role] authentification/role/getRoleItemByGroup');
