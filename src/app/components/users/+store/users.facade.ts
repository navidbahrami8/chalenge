import { Injectable } from '@angular/core';
import { Store, Action, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromSelector from './users.selectors';
import { Facade } from 'src/app/shared/interfaces/facade.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersFacade implements Facade {
  isloading$: Observable<boolean>;
  error$: Observable<any>;
  Users$: Observable<any>;
  UsersTotalLength$: Observable<any>;

  constructor(private readonly store: Store<any>) {
    this.isloading$ = store.pipe(select(fromSelector.selectIsLoading));
    this.error$ = store.pipe(select(fromSelector.selectError));
    this.Users$ = store.pipe(select(fromSelector.selectUsers));
    this.UsersTotalLength$ = store.pipe(
      select(fromSelector.selectUsersTotalLength)
    );
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
