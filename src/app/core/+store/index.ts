import { Action, ActionReducerMap } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { InjectionToken } from '@angular/core';
import {UsersReducer, UsersState} from "../../components/users/+store";

export interface State {
  router: fromRouter.RouterReducerState<any>;
  [UsersReducer.featureKey]: UsersState;

}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
  >('Root reducers token', {
  factory: () => ({
    router: fromRouter.routerReducer,
    [UsersReducer.featureKey]: UsersReducer.reducer
  })
});
