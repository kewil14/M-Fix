import { Action, createReducer, on } from '@ngrx/store';
import { erreurProfiles, setUserProfile, setAdministrateurProfile, setSaasUserProfile,
  updateUserProfile, updateAdministrateurProfile, updateSaasUserProfile, checkProfile,
  userNotLogin, checkAdminProfile, checkSaasProfile
} from './profile.actions';
import { ProfileState } from './profile.state';
import { DataStateEnum } from '../../config/data.state.enum';

const initState: ProfileState = {
  user: {},
  saasUser: {},
  administrateur: {},
  dataState: DataStateEnum.INITIAL,
  isLogin: false,
  messages: []
}

const reducer = createReducer(initState,
  on(setUserProfile, (state, {user}) => ({...state, user: user, dataState: DataStateEnum.SUCCESS})),
  on(userNotLogin, (state, {isLogin}) => ({...state, dataState: DataStateEnum.SUCCESS, isLogin: isLogin})),
  on(setAdministrateurProfile, (state, {administrateur}) => ({...state, administrateur: administrateur, dataState: DataStateEnum.SUCCESS})),
  on(setSaasUserProfile, (state, {saasUser}) => ({...state, saasUser: saasUser, dataState: DataStateEnum.SUCCESS})),
  on(updateUserProfile, updateAdministrateurProfile, updateSaasUserProfile, checkProfile,
    checkAdminProfile, checkSaasProfile, state => ({ ...state, dataState: DataStateEnum.LOADING })),
  on(erreurProfiles, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages}))
);

export function profileReducer(
  state: ProfileState | undefined,
  action: Action
): ProfileState {
  return reducer(state, action);
}
