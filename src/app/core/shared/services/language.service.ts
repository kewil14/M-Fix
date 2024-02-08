import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { APP_ENUMS } from '../../config/app.enums.config';
import { LocalStorageService } from './local-storage.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {

  public languages: string[] = ['en', 'fr'];

  constructor(
    public translate: TranslateService,
    private cookieService: CookieService,
    private localeStorageService: LocalStorageService) {

    let browserLang: any;
    /***
     * cookie Language Get
    */
    this.translate.addLangs(this.languages);
    if (this.cookieService.check(APP_ENUMS.PREFIX_LOCAL_LANG)) {
      browserLang = this.cookieService.get('lang');
    }
    else {
      browserLang = translate.getBrowserLang();
    }
    translate.use(browserLang.match(/en|fr/) ? browserLang : APP_ENUMS.PREFIX_LOCAL_LANG);
  }

  /***
   * Cookie Language set
   */
  public setLanguage(lang: any) {
    this.localeStorageService.setLocalLangValue(lang);
    this.translate.use(lang);
    this.cookieService.set(APP_ENUMS.PREFIX_LOCAL_LANG, lang);
  }

}
