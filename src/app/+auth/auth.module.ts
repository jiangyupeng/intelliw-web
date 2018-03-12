import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {routing} from './auth.routing';
import {AuthComponent} from './auth.component';
import {OauthService} from './oauth.service';

@NgModule({
  imports: [
    CommonModule,

    routing,
  ],
  declarations: [AuthComponent],
  providers: [OauthService]
})
export class AuthModule {
}
