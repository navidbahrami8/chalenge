import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {ROOT_REDUCERS} from "./core/+store";
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import {SharedModule} from "./shared/shared.module";


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreRouterConnectingModule,
    SharedModule,
    StoreModule.forRoot(ROOT_REDUCERS, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 100000000000,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
