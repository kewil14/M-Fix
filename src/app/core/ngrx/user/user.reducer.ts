import { DataStateEnum } from "../../config/data.state.enum";
import { UserState } from "./user.state";
import { setUser, deleteUser, addUser, loadUser, erreurUsers,
  findUsers, findUserByUsername, getAllUsers, findUserId,
  findByToken, resetPasswordUser, updateUser, updatePhotoUser
} from './user.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { User } from "../../shared/models/user.modal";

const initState: UserState = {
    dataState: DataStateEnum.INITIAL,
    user: {},
    users: [],
    messages: [],
}

const reducer = createReducer(initState,
    on(setUser, (state, {user}) => {
      let users = [...state.users];
      let list: Array<User> = users.filter((item) => item.id != user.id);
      list.push(user)
      return {...state, users: list, user: user, dataState: DataStateEnum.SUCCESS, messages: []}
    }),
    on(deleteUser, (state, {user}) => {
      let users = [...state.users];
      let list: Array<User> = users.filter((item) => item.id != user.id);
      return {...state, users: list, user: user, dataState: DataStateEnum.SUCCESS, messages: []}
    }),
    on(addUser, (state, {user}) => {
      let users = [...state.users];
      users.push(user);
      return {...state, users: users, user: user, messages: []};
    }),
    on(loadUser, (state, {users}) => ({...state, users: users, dataState: DataStateEnum.SUCCESS, messages: []})),
    on(erreurUsers, (state, {messages}) => ({...state, dataState: DataStateEnum.ERROR, messages: messages})),

    on( findUsers, findUserByUsername, getAllUsers, findUserId,
      findByToken, resetPasswordUser, updateUser, updatePhotoUser, state => ({ ...state, dataState: DataStateEnum.LOADING, messages: [] }))
  );
  
  export function usersReducer(
    state: UserState | undefined,
    action: Action
  ): UserState {
    return reducer(state, action);
  }