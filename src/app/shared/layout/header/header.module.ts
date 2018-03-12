import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule} from '@angular/forms';

import {PopoverModule} from 'ngx-popover';
import {BsDropdownModule} from 'ngx-bootstrap';

import {HeaderComponent} from './header.component';
import {ActivitiesComponent} from './activities/activities.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [
    HeaderComponent,
    // ActivitiesComponent,
  ]
})
export class HeaderModule {
}
