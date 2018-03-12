import {Component, OnInit, OnDestroy} from '@angular/core';
import {config} from '../tiadmin.config';
import {LayoutService} from '../../shared/layout/layout.service';
import {Subscription} from 'rxjs/Subscription';

declare var $: any;

@Component({
  selector: 'ti-layout-switcher',
  templateUrl: './layout-switcher.component.html'
})
export class LayoutSwitcherComponent implements OnInit, OnDestroy {
  isActivated: boolean;
  tiSkin: string;
  store: any;
  private sub: Subscription;

  constructor(public layoutService: LayoutService) {
    console.log('Layout Switch....');
  }

  ngOnInit() {
    this.sub = this.layoutService.subscribe((store) => {
      this.store = store;
    });
    this.store = this.layoutService.store;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  onToggle() {
    this.isActivated = !this.isActivated;
  }


  onTiSkin(skin) {
    this.layoutService.onTiSkin(skin);
  }


  onFixedHeader() {
    this.layoutService.onFixedHeader();
  }


  onFixedNavigation() {
    this.layoutService.onFixedNavigation();
  }

  /*
    onFixedRibbon() {
      this.layoutService.onFixedRibbon();
    }

*/
  onFixedPageFooter() {
    this.layoutService.onFixedPageFooter();
  }


  // onInsideContainer() {
  //   this.layoutService.onInsideContainer();
  // }
  //
  //
  // onRtl() {
  //   this.layoutService.onRtl();
  // }
  //
  //
  // onMenuOnTop() {
  //   this.layoutService.onMenuOnTop();
  // }
  //
  //
  // onColorblindFriendly() {
  //   this.layoutService.onColorblindFriendly();
  // }
  //
  //
  // factoryReset() {
  //   this.layoutService.factoryReset();
  // }
}
