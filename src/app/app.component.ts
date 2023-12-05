import { Component, Inject, LOCALE_ID } from '@angular/core';
import { ISidebarItems } from './components/shared/sidebar/sidebar-item.interface';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  sidebarItems: ISidebarItems = [
    { id: 0, title: $localize`:left sidebar nav item|The text link to backlog page in the left sidebar:Backlog`, path: 'backlog' },
    { id: 1, title: $localize`:left sidebar nav item|The text link to board page in the left sidebar:Board`, path: 'board' }
  ]

}
