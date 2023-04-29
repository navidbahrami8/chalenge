import {NgModule} from '@angular/core';

import {UsersRoutingModule} from './users-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {UsersComponent} from './users.component';
import {EffectsModule} from '@ngrx/effects';
import {UsersEffects} from "./+store/users.effects";
import {UsersService} from "./services/users.service";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    SharedModule,
    UsersRoutingModule,
    EffectsModule.forFeature([UsersEffects]),
    NgForOf,
    AsyncPipe,
    NgIf,
    FormsModule
  ],
  providers:[UsersService]
})
export class UsersModule {
}
