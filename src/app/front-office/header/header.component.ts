import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { LanguageService } from 'src/app/core/shared/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  element: any;

  flagvalue: any;
  valueset: any;
  countryName: any;
  cookieValue: any;

  constructor(
    public _cookiesService: CookieService,
    public translate: TranslateService,
    public languageService: LanguageService,
  ) {
    // this.auth = this.localStorageService.currentTokenValueFin;
  }

  ngOnInit(): void {

    this.cookieValue = this._cookiesService.get('lang');
     const val = this.listLang.filter(x => x.lang === this.cookieValue);
     this.countryName = val.map(element => element.text);
     if (val.length === 0) {
       if (this.flagvalue === undefined) { this.valueset = 'assets/images/flags/us.svg'; }
     } else {
       this.flagvalue = val.map(element => element.flag);
     }
  }

  /***
   * Language Listing
   */
  listLang = [
    { text: 'English', flag: 'assets/images/flags/us.svg', lang: 'en' },
    { text: 'français', flag: 'assets/images/flags/french.svg', lang: 'fr' },
  ];

  /***
   * Language Value Set
   */
  setLanguage(text: string, lang: string, flag: string) {
    this.countryName = text;
    this.flagvalue = flag;
    this.cookieValue = lang;
    this.languageService.setLanguage(lang);
  }
}
