import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UsersState } from './users.interface';
import { featureKey } from './users.reducer';

export const selectFeature = createFeatureSelector<UsersState>(featureKey);

export const selectError = createSelector(
  selectFeature,
  (state: UsersState) => state.error
);
export const selectIsLoading = createSelector(
  selectFeature,
  (state: UsersState) => state.isLoading
);
export const selectUsers = createSelector(
  selectFeature,
  (state: UsersState) =>
    state.users
);

export const selectUsersTotalLength = createSelector(
  selectFeature,
  (state: UsersState) =>
    state.users
);
