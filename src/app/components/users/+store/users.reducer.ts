import {routerNavigationAction} from '@ngrx/router-store';
import {Action, createReducer, on} from '@ngrx/store';
import * as fromActions from './users.actions';
import {UsersState} from './users.interface';

export const initialState: UsersState = {
  error: null,
  isLoading: false,
  users: null
};

export const featureKey = 'Users';

const UsersReducer = createReducer(
  initialState,
  on(
    routerNavigationAction,
    (state): UsersState => ({...state, error: false})
  ),
  on(
    fromActions.getUsers,
    (state, action): UsersState => ({
      ...state,
      error: null
    })
  ), on(
    fromActions.getUsersSuccess,
    (state, action): UsersState => ({
      ...state,
      error: null,
      users: action.users
    })
  ),  on(
    fromActions.getUsersFail,
    (state, action):  UsersState  => ({
      ...state,
      error: action.error
    })
  ),
);

export function reducer(state: any, action: Action) {
  return UsersReducer(state, action);
}
