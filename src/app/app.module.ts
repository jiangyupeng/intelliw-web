import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {routing} from './app.routing';

import {AppComponent} from './app.component';
import {APP_RESOLVER_PROVIDERS} from './app.resolver';
import {AppState, InternalStateType} from './app.service';

// Core providers
import {CoreModule} from './core/core.module';
import {TiadminLayoutModule} from './shared/layout/layout.module';

import {ModalModule} from 'ngx-bootstrap/modal';
import {httpInterceptorProviders} from './interceptor';
import {OauthService} from './+auth/oauth.service';


// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // FormsModule,
    FormsModule,
    // ReactiveFormsModule,
    ModalModule.forRoot(),


    CoreModule,
    TiadminLayoutModule,

    routing
  ],
  providers: [
    APP_PROVIDERS,
    OauthService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {
    console.log('=========>>APP[ MODULE<<===========');
  }
}
