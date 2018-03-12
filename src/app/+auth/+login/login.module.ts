import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {OauthService} from '../oauth.service';
// https://stackoverflow.com/questions/34464108/angular-set-headers-for-every-request
// http://blog.csdn.net/tzdwsy/article/details/59005581
// https://github.com/Vetkdf/yang-test/blob/master/src/app/public/login/login.component.html
// https://www.jianshu.com/p/7df221bca332
@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [LoginComponent]
})
export class LoginModule {
}
