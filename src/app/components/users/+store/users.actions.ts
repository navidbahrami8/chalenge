import { createAction, props } from '@ngrx/store';

export const getUsers = createAction(
  '[get Users page]'
);
export const getUsersSuccess = createAction(
  '[get Users Success]',
  props<{ users: any }>()
);

export const getUsersFail = createAction(
  '[get users page] Get Users Fail',
  props<{ error: any }>()
);
