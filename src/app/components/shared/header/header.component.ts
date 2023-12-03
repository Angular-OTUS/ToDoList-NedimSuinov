import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, filter, map, of, switchMap } from 'rxjs';

@Component({
  selector: 'header[tb-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  title$: Observable<string>

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
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
}
