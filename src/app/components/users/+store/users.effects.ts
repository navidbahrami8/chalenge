import {Injectable} from '@angular/core';
import {Actions, createEffect, EffectConfig, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import * as fromActions from './users.actions';
import {UsersService} from '../services/users.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {getUsers, getUsersFail, getUsersSuccess} from "./users.actions";
import {of} from "rxjs";

@Injectable()
export class UsersEffects {
  constructor(
    public actions$: Actions,
    private UsersService: UsersService,
    private snackbar: MatSnackBar
  ) {
  }

  // getUsers$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(getUsers),
  //     mergeMap(() => {
  //       return this.UsersService.getUsers().pipe(
  //         map((data: any) => {
  //           return getUsersSuccess({users: data});
  //         })
  //       );
  //     })
  //   )
  // );

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsers),
      mergeMap(() => {
        return this.UsersService.getUsers().pipe(
          map((data: any) => {
            return getUsersSuccess({users: data})
          }),
          catchError(error => {
            const err = error.length > 45 ? error.substr(0, 45) + '...' : error;
            this.snackbar.open(err, '', {
              panelClass: 'red'
            });
            return of(getUsersFail({ error }));
          })
        );
      })
    )
  );
}
