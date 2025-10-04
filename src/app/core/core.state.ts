import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { ProfileState } from './ngrx/profile/profile.state';
import { profileReducer } from './ngrx/profile/profile.reducer';

export interface AppState {
    profileState: ProfileState,
    // authentificationFinState: AuthentificationFinState,
    // roleState: RoleState,

}

export const selectProfileState = createFeatureSelector<ProfileState>('profileState');
// export const selectAuthentificationFinState = createFeatureSelector<AuthentificationFinState>('authentificationFinState');
// export const selectRoleState = createFeatureSelector<RoleState>('roleState');

// export const selectSystemInitState = createFeatureSelector<SystemInitState>('systemInitState');


export const reducers: ActionReducerMap<AppState> = {
    profileState: profileReducer,
    // authentificationFinState: AuthentificationFinReducer,
    // roleState: rolesReducer,
}






