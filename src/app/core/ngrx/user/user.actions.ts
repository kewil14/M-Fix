import { createAction, props } from "@ngrx/store";
import { User } from "../../shared/models/user.modal";

//actions for manage local data
export const erreurUsers = createAction('[User] authentification/user/erreurs', props<{messages: string[]}>());
export const setUser = createAction('[User] authentification/user/setUser', props<{ user: User}>());
export const deleteUser = createAction('[User] authentification/user/deleteUser', props<{ user: User }>());
export const addUser = createAction('[User] authentification/user/addUser', props<{ user: User}>());
export const loadUser = createAction('[User] authentification/user/loadUser', props<{ users: Array<User>}>());

// actions for manage remote data
export const findUsers = createAction('[User] authentification/user/findUsers');
export const findUserByUsername = createAction('[User] authentification/user/findUserByUsername', props<{username: any}>());
export const getAllUsers = createAction('[User] authentification/user/getAllUsers');
export const findUserId = createAction('[User] authentification/user/findUserId', props<{id: any}>());
export const findByToken = createAction('[User] authentification/user/findByToken');
export const resetPasswordUser = createAction('[User] authentification/user/resetPasswordUser', props<{user: User}>());
export const updateUser = createAction('[User] authentification/user/updateUser', props<{user: User}>());
export const updatePhotoUser = createAction('[User] authentification/user/updatePhotoUser', props<{ user: User, file: File }>());
