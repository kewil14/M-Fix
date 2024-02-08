import {createAction, props} from '@ngrx/store';
import {User} from '../../shared/models/user.modal';
import { Administrateur } from '../../shared/models/administrateur.modal';
import { SaasUser } from '../../shared/models/saas-user.modal';

//actions for manage local data
export const erreurProfiles = createAction('[Profile] authentification/profile/erreurs', props<{messages: string[]}>());
export const userNotLogin = createAction('[Profile] authentification/profile/userNotLogin', props<{isLogin: boolean}>());

export const setUserProfile = createAction('[Profile] authentification/profile/setUserProfile', props<{ user: User}>());
export const setAdministrateurProfile = createAction('[Profile] authentification/profile/setAdministrateurProfile', props<{ administrateur: Administrateur}>());
export const setSaasUserProfile = createAction('[Profile] authentification/profile/setSaasUserProfile', props<{ saasUser: SaasUser}>());

//actions for manage remote data
export const updateUserProfile = createAction('[Profile] authentification/profile/updateUserProfile', props<{user: User}>());
export const updateAdministrateurProfile = createAction('[Profile] authentification/profile/updateAdministrateurProfile', props<{administrateur: Administrateur}>());
export const updateSaasUserProfile = createAction('[Profile] authentification/profile/updateSaasUserProfile', props<{saasUser: SaasUser}>());

export const checkProfile = createAction('[Profile] authentification/profile/checkProfile');
export const checkAdminProfile = createAction('[Profile] authentification/profile/checkAdminProfile');
export const checkSaasProfile = createAction('[Profile] authentification/profile/checkSaasProfile');
