import {Component, OnInit} from '@angular/core';
import {I18nService} from '../i18n.service';
import {languages} from '../languages.model';

@Component({
  selector: 'ti-language-selector',
  templateUrl: './language-selector.component.html'
})
export class LanguageSelectorComponent implements OnInit {

  public languages: Array<any>;
  public currentLanguage: any;

  constructor(private i18n: I18nService) {
  }

  ngOnInit() {
    this.languages = languages;
    this.currentLanguage = this.i18n.currentLanguage;
  }

  setLanguage(language) {
    this.currentLanguage = language;
    this.i18n.setLanguage(language);
  }

}
