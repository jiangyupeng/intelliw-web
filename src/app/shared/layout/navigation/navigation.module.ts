import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {NavigationComponent} from './navigation.component';
import {TiMenuDirective} from './ti-menu.directive';

import {I18nModule} from '../../i18n/i18n.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    I18nModule
  ],
  declarations: [
    NavigationComponent,
    TiMenuDirective
  ],
  exports: [
    NavigationComponent,
    TiMenuDirective,
  ]
})
export class NavigationModule {
}
