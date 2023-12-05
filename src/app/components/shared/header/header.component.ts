import { ChangeDetectionStrategy, Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, filter, map, of, switchMap } from 'rxjs';
import { IGuideSimple, IGuidesSimple } from 'src/app/interfaces/guide.interface';

@Component({
  selector: 'header[tb-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  
  title$: Observable<string>;
  
  showLanguageList: boolean = false;
  selectedLanguage: IGuideSimple = { name: 'English', code: 'en-US' };
  languageList: IGuidesSimple = [
    { 
      name: 'English', 
      code: 'en-US' 
    },
    { 
      name: 'Русский', 
      code: 'ru-RU' 
    },
  ];

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    @Inject(LOCALE_ID) private localeId: string) {
    this.title$ = this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd), 
      switchMap((e) => {
        while(this.activatedRoute.firstChild) {
          return this.activatedRoute.firstChild.data
        }
        return of({ title: 'Title' })
      }),
      map(d => d['title']))
  }

  ngOnInit(): void {
    const langItem = this.languageList.find(l => l.code === this.localeId)
    if(langItem) 
      this.onSelectLanguage(langItem);
  }

  selectMouseEnter(event: MouseEvent): void {
    this.showLanguageList = true;
  }
  
  selectMouseLeave(event: MouseEvent): void {
    this.showLanguageList = false;
  }

  onSelectLanguage(nowSelectedLanguage: IGuideSimple): void {
    if(nowSelectedLanguage.code === this.selectedLanguage.code) 
      return;

    this.selectedLanguage = nowSelectedLanguage;
    this.languageList.reverse();
  }
  
  trackByFn = (idx: number, item: IGuideSimple) => `${idx}__${item.code}`;
}
